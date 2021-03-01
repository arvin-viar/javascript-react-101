import { useEffect, useState } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { getData } from "./helpers/api";
import HomePage from "./pages/HomePage";
import ArticlesPage from "./pages/ArticlesPage";
import ArticleDetailsPage from "./pages/ArticleDetailsPage";
import AuthorDetailsPage from "./pages/AuthorDetailsPage";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  const [_posts, _setPosts] = useState([]);
  const [_users, _setUsers] = useState([]);

  const postsQuery = {view: "grid"};
  const getPosts = getData('posts', postsQuery);

  const authorQuery = {view: "grid"};
  const getAuthors = getData('author', authorQuery);

  useEffect(() => {
    Promise.all([getPosts, getAuthors])
      .then(values => {
        const postsData = values[0].map(post => {
          return {
            id: post.id,
            fields: post.fields
          }
        });
        _setPosts(postsData);
        _setUsers(values[1]);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  return (
    <BrowserRouter>
      <Header />
      <Route exact path="/" component={() => <HomePage posts={_posts} authors={_users} />} />
      <Route path="/articles" component={() => <ArticlesPage posts={_posts} authors={_users} />} />
      <Route path="/article-details/:postId" component={() => <ArticleDetailsPage type={`article`} posts={_posts} />} />
      <Route path="/author-details/:authorId" component={() => <AuthorDetailsPage type={`author`} authors={_users} />} />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
