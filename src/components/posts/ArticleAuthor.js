import authorImage from "../../assets/images/author-dp.jpg";

function ArticleAuthor() {
    return (
        <div className="article__author">
            <img className="article__author-pic" src={authorImage} alt="author dp" />
            <div className="article__author-details">
                <p className="article__author-info">
                    <span>Capture Man</span><span>Photographer</span>
                </p>
                <p className="article__author-description">
                    Vestibulum vel orci et mi euismod sodales. 
                    Quisque sit amet odio imperdiet, vehicula sem eget, scelerisque orci. 
                    Donec neque sem, efficitur interdum dui eget, tristique tempus ante. 
                    Etiam tincidunt porta blandit. Duis vulputate eu lacus quis cursus. 
                    Integer eget ornare justo. 
                </p>
            </div>
        </div>
    )
}

export default ArticleAuthor;
