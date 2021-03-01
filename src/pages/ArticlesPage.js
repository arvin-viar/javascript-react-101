import { useState, useEffect } from "react";
import ArticleItem from "../components/posts/ArticleItem";
import CuratedPosts from "../components/posts/CuratedPosts";
import Categories from "../components/posts/Categories";
import { sortPosts, getFilteredPosts } from "../helpers/helper";
import { randomPosts } from "../helpers/helper";
import Loader from "../components/Loader";

function ArticlesPage(props) {
    const { posts, authors } = props;
    
    const [_posts, _setPosts] = useState([...posts]);
    const [_users, _setUsers] = useState([...authors]);
    const [_topThree, _setTopThree] = useState([]);
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
        const mappedPosts = posts.map(record => {
            const authorId = record.fields.authorId;
            const images = record.fields.image ? record.fields.image : [];
            return {
                id: record.id,
                dateCreated: record.fields.Created,
                title: record.fields.title,
                body: record.fields.body,
                image: images[0],
                authorId: authorId[0],
                authorFirstname: record.fields.authorFirstname,
                authorLastname: record.fields.authorLastname,
                authorTeam: record.fields.authorTeam,
            };
        });
        const mappedTopThree = randomPosts(mappedPosts, 3);
        _setTopThree(mappedTopThree);
        _setPosts([...mappedPosts]);
        _setDefaultPosts([...mappedPosts]);
    }, [posts]);

    useEffect(() => {
        const mappedAuthors = authors.map(record => {
            return {
                id: record.id,
                lastname: record.fields.lastname,
                firstname: record.fields.firstname,
            };
        });
        _setUsers([...mappedAuthors]);
    }, [authors]);

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

    function filterPosts(key = 'id', value) {
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

    return (
        <main>
            <Categories />
            <div>
            {_topThree && _topThree.length > 0 
                ? (
                    <CuratedPosts posts={_topThree} />
                ) 
                : (
                    <Loader />
                )
            }
            </div>
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
                                    {_users.length > 0 
                                        ? (
                                            _users.map((user) => {
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
                                    _posts.map((post) => <ArticleItem key={post.id} {...post} />)
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

export default ArticlesPage;
