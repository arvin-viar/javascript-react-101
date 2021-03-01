import { useState, useEffect } from "react";
import Moment from "moment";
import ArticleAuthor from "./ArticleAuthor";
import Comments from "../Comments";
import Loader from "../Loader";
import featuredImage from "../../assets/images/temp/cameras.jpeg";

function PostDetails(props) {
    console.log(props);
    const { type, post } = props;
    const [_data, _setData] = useState(post);

    useEffect(() => {
        let data = {
            id: post ? post.id : null,
            fields: post ? post.fields : []
        };
        console.log(data);
        if (type === "author") {
            data = {
                id: post ? post.id : null,
                imageUrl: post.fields.displayPicture ? post.fields.displayPicture[0].url : `${featuredImage}`,
                firstName: post.fields.firstname,
                lastName: post.fields.lastname,
                team: post.fields.team,
                body: post.fields.about,
                title: `${post.fields.firstname} ${post.fields.lastname}`,
            };
        } 
        if (post && type === "article") {
            data = {
                id: post ? post.id : null,
                imageUrl: post.fields.image ? post.fields.image[0].url : `${featuredImage}`,
                body: post.fields.body,
                title: post.fields.title,
                created: post.fields.Created,
                authorId: post.fields.authorId ? post.fields.authorId[0] : null,
                authorFname: post.fields.authorFirstname ? post.fields.authorFirstname[0] : null,
                authorLname: post.fields.authorLastname ? post.fields.authorLastname[0] : null,
                authorDP: post.fields.authorPicture ? post.fields.authorPicture[0].url : `${featuredImage}`,
                authorAbout: post.fields.authorAbout ? post.fields.authorAbout[0] : null,
                authorTeam: post.fields.authorTeam ? post.fields.authorTeam[0] : null,
            };
        }
        _setData(data);
    }, [post, type]);

    return (
        <>
        <section className={type}>
            {_data.id
                ? (
                    <div className="container">
                        <figure className={`${type}__hero-img`}>
                            <img src={ _data.imageUrl } alt="hero" />
                            { type === "article"
                                ? (<figcaption>Photo by {_data.firstName} {_data.lastName}</figcaption>) 
                                : null
                            }
                        </figure>
                        <div className={`${type}__info`}>
                            <h1>{_data.title}</h1>
                            <p className={`${type}__info-posted`}>
                            { type === "article" 
                                ? (<span className={`${type}__info-posted-date`}>{Moment(_data.created).format('LLL')}</span>) 
                                : (<span className={`${type}__info`}>{_data.team}</span>) 
                            }
                            </p>
                        </div>
                        <div className={`${type}__rte`}>
                            {_data.body}
                        </div>
                        { type === 'article'
                            ? (
                                <ArticleAuthor 
                                    id={_data.authorId}
                                    fname={_data.authorFname}
                                    lname={_data.authorLname}
                                    team={_data.authorTeam}
                                    about={_data.authorAbout}
                                    picture={_data.authorDP}
                                />
                            ) : (
                                null
                            )
                        }
                    </div>
                ) : (
                    <Loader />
                )
            }
        </section>
        { type === 'article' ? <Comments /> : null }
        </>
    )
}

export default PostDetails;
