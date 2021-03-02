import { useState, useEffect } from "react";
import Moment from "moment";
import styled from "styled-components";
import ArticleAuthor from "./ArticleAuthor";
import Comments from "../Comments";
import Loader from "../Loader";
import featuredImage from "../../assets/images/temp/cameras.jpeg";
import authorImage from "../../assets/images/default/author.png";

const DetailsSection = styled.section`
    padding: 0;
    @media (min-width: 768px) {
        padding: 50px 0px;
    }
    .article__hero-img {
        margin-bottom: 20px;
        text-align: center;
        img {
            width: 100%;
        }
        figcaption {
            color: #b2b2b2;
            font-size: 12px;
        }
    }
    .article__info {
        margin-bottom: 15px;
        padding: 0 15px;
        &-posted {
            color: #b2b2b2;
            font-size: 14px;
        }
        @media (min-width: 768px) {
            padding: 0px;
        }
    }
    .article__rte {
        margin-bottom: 50px;
        padding: 0 15px;
        h1, h2, h3, h4, p, blockquote {
            margin-bottom: 15px;
        }
        h1, h2, h3, h4, ul, ol {
            clear: both;
        }
        ul, ol {
            margin-bottom: 15px;
            padding-left: 25px;
            li {
                list-style: disc;
            }
        }
        img {
            float: left;
            margin: 0 15px 15px 0;
        }
        @media (min-width: 768px) {
            padding: 0px;
        }
    }
    .author__hero-img {
        margin-bottom: 20px;
        text-align: center;
        img {
            width: 100%;
            margin: 0 auto;
            @media (min-width: 768px){
                width: auto;
            }
        }
    }
    .author__info {
        margin-bottom: 20px;
        padding: 0 15px;
        text-align: center;
    }
    .author__rte {
        margin-bottom: 20px;
        padding: 0 15px;
        @media (min-width: 768px){
            padding: 0px;
        }
    }
`

const Container = styled.div`
    max-width: 1024px;
    margin: 0 auto;
`

function PostDetails(props) {
    const { type, post } = props;
    const [_data, _setData] = useState(post);

    useEffect(() => {
        let data = {
            id: post ? post.id : null,
            fields: post ? post.fields : []
        };
        if (type === "author") {
            data = {
                id: post ? post.id : null,
                imageUrl: post.fields.displayPicture ? post.fields.displayPicture[0].url : `${authorImage}`,
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
                authorDP: post.fields.authorPicture ? post.fields.authorPicture[0].url : `${authorImage}`,
                authorAbout: post.fields.authorAbout ? post.fields.authorAbout[0] : null,
                authorTeam: post.fields.authorTeam ? post.fields.authorTeam[0] : null,
            };
        }
        _setData(data);
    }, [post, type]);

    return (
        <>
        <DetailsSection>
            {_data.id
                ? (
                    <Container>
                        <figure className={`${type}__hero-img`}>
                            <img src={ _data.imageUrl } alt="hero" />
                            { type === "article"
                                ? (<figcaption>Photo by {_data.authorFname} {_data.authorLname}</figcaption>) 
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
                    </Container>
                ) : (
                    <Loader />
                )
            }
        </DetailsSection>
        { type === 'article' ? <Comments /> : null }
        </>
    )
}

export default PostDetails;
