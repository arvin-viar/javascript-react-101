import curatedImage from "../../assets/images/temp/consoles.jpg";

function CuratedPosts() {
    return (
        <section className="curated">
            <div className="container">
                <ul className="curated__list">
                    <li className="curated__item">
                        <div className="curated__item-wrap">
                            <img className="curated__item-image" src={curatedImage} alt="curate img" />
                            <div className="curated__item-details">
                                <h3>Lorem ipsum dolor</h3>
                                <p>
                                    Etiam purus odio, pharetra vitae dui finibus, laoreet dignissim libero...
                                </p>
                            </div>
                        </div>
                    </li>
                    <li className="curated__item">
                        <div className="curated__item-wrap">
                            <img className="curated__item-image" src={curatedImage} alt="curate img 1" />
                            <div className="curated__item-details">
                                <h3>Lorem ipsum dolor</h3>
                                <p>
                                    Etiam purus odio, pharetra vitae dui finibus, laoreet dignissim libero...
                                </p>
                            </div>
                        </div>
                    </li>
                    <li className="curated__item">
                        <div className="curated__item-wrap">
                            <img className="curated__item-image" src={curatedImage} alt="curate img 2" />
                            <div className="curated__item-details">
                                <h3>Lorem ipsum dolor</h3>
                                <p>
                                    Etiam purus odio, pharetra vitae dui finibus, laoreet dignissim libero...
                                </p>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </section>
    )
}

export default CuratedPosts;
