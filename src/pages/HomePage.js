import { useState, useEffect } from "react";
import Banner from "../components/Banner";
import FeaturedPosts from "../components/posts/FeaturedPosts";
import FeaturedAuthor from "../components/author/FeaturedAuthor";

function HomePage(props) {
    const { posts, authors } = props;
    const [_posts, _setPosts] = useState([...posts]);
    const [_users, _setUsers] = useState([...authors]);

    useEffect(() => {
        _setPosts([...posts]);
    }, [posts]);

    useEffect(() => {
        _setUsers([...authors]);
    }, [authors]);

    return (
        <main role="main">
            <Banner />
            <FeaturedPosts posts={_posts} />
            <FeaturedAuthor authors={_users} posts={_posts} />
        </main>
    );
}

export default HomePage;
