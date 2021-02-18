import Moment from "moment";
import featuredImage from "../../assets/images/temp/consoles.jpg";

function FeaturedPostArticle({id, title, body, dateCreated, authorFirstname, authorLastname, authorTeam}) {
    return (
        <div className="featured__item" data-postid={id}>
            <figure className="featured__item-imgwrap">
                <img src={featuredImage} alt="gaming consoles" />
                <div className="featured__item-socials">
                    <span className="featured__item-social social--facebook">Facebook</span>
                    <span className="featured__item-social social--twitter">Twitter</span>
                    <span className="featured__item-social social--youtube">Youtube</span>
                    <span className="featured__item-social social--pinterest">Pinterest</span>
                </div>
            </figure>
            <div className="featured__item-details">
                <div>
                    <p className="featured__item-details-category">Gaming Consoles</p>
                    <h1>{title}</h1>
                    <p className="featured__item-details-author">{authorFirstname} {authorLastname} | {authorTeam}</p>
                    <p className="featured__item-details-body">{body.slice(0, 150)}...</p>
                </div>
                <p className="featured__item-details-posted">{Moment(dateCreated).format('lll')} | 10min read</p>
            </div>
        </div>
    )
}

export default FeaturedPostArticle;
