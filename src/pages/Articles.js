import { useState, useEffect } from "react";
import PostArticle from "../components/posts/PostArticle";
import CuratedPosts from "../components/posts/CuratedPosts";
import Categories from "../components/posts/Categories";
import { sortPosts, getFilteredPosts } from "../helpers/helper";
import { getData } from "../helpers/api";
import Loader from "../components/Loader";

function Articles() {
    const [users, setUsers] = useState([]);
    const [_posts, _setPosts] = useState([]);
    const [_defaultPosts, _setDefaultPosts] = useState([]);
    const [sorted, setSorted] = useState({
        isSorted: false,
        sortBy: 'none'
    });
    const [filtered, setFiltered] = useState({
        isFiltered: false,
        filterKey: '',
        filterValue: ''
    });

    useEffect(() => {
        const query = {view: "grid"};
        const postsData = getData('posts', query);
        postsData.then((data) => {
            const postsData = data.map(record => {
                const authorId = record.fields.authorId;
                return {
                    id: record.id,
                    dateCreated: record.fields.Created,
                    title: record.fields.title,
                    body: record.fields.body,
                    authorId: authorId[0],
                    authorFirstname: record.fields.authorFirstname,
                    authorLastname: record.fields.authorLastname,
                    authorTeam: record.fields.authorTeam,
                };
            });
            _setPosts(postsData);
            _setDefaultPosts(postsData);
        });
    }, []);

    useEffect(() => {
        const query = {view: "grid"};
        const authorsData = getData('author', query);
        authorsData.then((data) => {
            const authors = data.map(record => {
                return {
                    id: record.id,
                    lastname: record.fields.lastname,
                    firstname: record.fields.firstname,
                };
            });
            setUsers(authors);
        });
    }, []);

    useEffect(() => {
        _setPosts(_posts);
    }, [_posts]);

    function handleSort(e) {
        const selected = e.currentTarget.value;
        setSorted({
            isSorted: true,
            sortBy: selected
        });
        if (!filtered.isFiltered) {
            const newSortedPosts = sortPosts(selected, _posts, _defaultPosts);
            _setPosts(newSortedPosts);
        } else {
            const filteredPosts = getFilteredPosts(filtered.filterKey, filtered.filterValue, _defaultPosts);
            const newSortedPosts = sortPosts(selected, filteredPosts, _defaultPosts);
            _setPosts(newSortedPosts);
        }
    }

    function filterPosts(key = 'id', value) {
        console.log(key, value);
        if (value === 'all') {
            if (sorted.isSorted && sorted.sortBy !== 'none') {
                const newSortedPosts = sortPosts(sorted.sortBy, _defaultPosts, _defaultPosts);
                _setPosts(newSortedPosts);
            } else {
                _setPosts([..._defaultPosts]);
            }
            return;
        }
        const filteredPosts = getFilteredPosts(key, value, _defaultPosts);
        if (sorted.isSorted && sorted.sortBy !== 'none') {
            const newSortedPosts = sortPosts(sorted.sortBy, filteredPosts, _defaultPosts);
            _setPosts(newSortedPosts);
        } else {
            _setPosts(filteredPosts);
        }
    }

    function handleFilter(e) {
        const selectedValue = e.target.value;
        const filterKey = e.target.dataset.filterkey;
        if (selectedValue === 'all') {
            setFiltered({
                isFiltered: false
            });
        } else {
            setFiltered({
                isFiltered: true,
                filterKey: filterKey,
                filterValue: selectedValue
            });
        }
        filterPosts(filterKey, selectedValue);
    }

    return (
        <main>
            <Categories />
            <CuratedPosts />
            <section className="articles">
                <div className="container">
                    <div className="row">
                        <header className="articles__header">
                            <h1>Latest</h1>
                            <div className="articles__header-options">
                                <select name="sort" className="post-sort" id="sort-posts" onChange={handleSort}>
                                    <option value="none">Sort</option>
                                    <option value="dateDesc">By Date Desc</option>
                                    <option value="dateAsc">By Date Asc</option>
                                    <option value="alphaDesc">Alphabetically Desc</option>
                                    <option value="alphaAsc">Alphabetically Asc</option>
                                </select>
                                <select name="filter" className="post-filter"  id="filter-byauthor" data-filterkey="authorId" onChange={handleFilter}>
                                    <option value="all">Filter By Author</option>
                                    {users.length > 0 
                                        ? (
                                            users.map((user) => {
                                                return (
                                                    <option key={user.id} value={user.id}>{user.firstname} {user.lastname}</option>
                                                );
                                            })
                                        ) 
                                        : ('')
                                    }
                                </select>
                            </div>
                        </header>
                        <div className="articles__list">
                            {_posts.length > 0 
                                ? (
                                    _posts.map((post) => <PostArticle key={post.id} {...post} />)
                                ) : (
                                    <Loader />
                                )
                            }
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}

export default Articles;
