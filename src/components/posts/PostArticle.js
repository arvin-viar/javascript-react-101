function PostArticle({title, body}) {
    return (
        <article>
            <h2>{title}</h2>
            <div className="body">
                {body}
            </div>
        </article>
    )
}

export default PostArticle;
