import styled from "styled-components";
import commentImg from "../assets/images/default/user.png";

const CommentSection = styled.section`
    padding: 0px;
    h3 {
        margin-bottom: 15px;
        padding: 0 15px;
        @media (min-width: 768px) {
            padding: 0px;
        }
    }
`

const Container = styled.div`
    max-width: 1024px;
    margin: 0 auto;
`

const CommentList = styled.ul`
    margin-bottom: 25px;
    padding: 0 15px;
    @media (min-width: 768px) {
        padding: 0px;
    }
    .comments_item {
        margin-bottom: 15px;
        &:last-child {
            margin-bottom: 0;
        }
        &-wrap {
            display: inline-block;
            width: 100%;
        }
        &-pic {
            float: left;
            padding: 0 15px;
            img {
                max-width: 50px;
                border-radius: 50%;
            }
        }
        &-details {
            float: left;
            width: calc(100% - 80px);
            &-name {
                margin-bottom: 5px;
            }
            &-message {
                font-size: 14px;
            }
            &-posted {
                margin-bottom: 10px;
                font-size: 12px;
                color: #b2b2b2;
            }
        }
    }
`

const CommentForm = styled.div`
    width: 100%;
    max-width: 500px;
    margin: 0 auto;
    padding: 15px;
    background: #e4e9f1;
    h3 {
        text-align: center;
    }
    .form-group {
        margin-bottom: 10px; 
    }
    @media (min-width: 768px) {
        margin-bottom: 20px;
    }
`

function Comments() {
    return (
        <CommentSection>
            <Container>
                <h3>1 Comment</h3>
                <CommentList>
                    <li className="comments_item">
                        <div className="comments_item-wrap">
                            <div className="comments_item-pic">
                                <img src={commentImg} alt="user dp" />
                            </div>
                            <div className="comments_item-details">
                                <h4 className="comments_item-details-name">Juan Dela Cruz</h4>
                                <p className="comments_item-details-posted">
                                    January 20, 2021 at 11:00AM
                                </p>
                                <p className="comments_item-details-message">
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                    Pariatur quidem laborum necessitatibus, ipsam impedit vitae
                                    autem, eum officia, fugiat saepe enim sapiente iste iure!
                                    Quam voluptas earum impedit necessitatibus, nihil?
                                </p>
                            </div>
                        </div>
                    </li>
                </CommentList>
                <CommentForm>
                    <h3>Leave a comment</h3>
                    <form>
                        <div className="form-group">
                            <label htmlFor="comment-subject">Subject</label>
                            <input id="comment-subject" type="text" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="comment-message">Message</label>
                            <textarea id="comment-message" rows="5"></textarea>
                        </div>
                        <button className="btn btn--submit" type="submit">Post Comment</button>
                    </form>
                </CommentForm>
            </Container>
        </CommentSection>
    )
}

export default Comments;
