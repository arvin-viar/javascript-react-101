import commentImg from "../assets/images/dp.png";

function Comments() {
    return (
        <section className="comments">
            <div className="container">
                <h3>3 Comments</h3>
                <ul className="comments_list">
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
                </ul>
                <div className="comments__form">
                    <h3>Leave a comment</h3>
                    <form>
                        <div className="form-group">
                            <label for="comment-subject">Subject</label>
                            <input id="comment-subject" type="text" />
                        </div>
                        <div className="form-group">
                            <label for="comment-message">Message</label>
                            <textarea id="comment-message" rows="5"></textarea>
                        </div>
                        <button className="btn btn--submit" type="submit">Post Comment</button>
                    </form>
                </div>
            </div>
        </section>
    )
}

export default Comments;
