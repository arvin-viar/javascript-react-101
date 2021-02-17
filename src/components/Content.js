import { useState, useEffect } from "react";
import styled from "styled-components";
import PostArticle from "./posts/PostArticle";
import { sortPosts, getFilteredPosts } from "../helpers/helper";
import { getAPIData } from "../helpers/api";

const Main = styled.main`
    background-color: #bebebe;
`;

function Content() {
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
        const postsData = getAPIData('posts', query);
        postsData.then((data) => {
            const postsData = data.map(record => {
                return {
                id: record.id,
                dateCreated: record.createdTime,
                title: record.fields.title,
                body: record.fields.body,
                authorId: record.fields.authorId,
                };
            });
            _setPosts(postsData);
            _setDefaultPosts(postsData);
        });
    }, []);

    useEffect(() => {
        const query = {view: "grid"};
        const postsData = getAPIData('author', query);
        postsData.then((data) => {
            const authors = data.map(record => {
                return {
                    id: record.fields.id,
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
        <Main>
            <aside className="posts-actions">
                <select name="sort" id="sort-posts" onChange={handleSort}>
                    <option value="none">Sort</option>
                    <option value="dateDesc">By Date Desc</option>
                    <option value="dateAsc">By Date Asc</option>
                    <option value="alphaDesc">Alphabetically Desc</option>
                    <option value="alphaAsc">Alphabetically Asc</option>
                </select>
                <select name="sort" id="filter-byauthor" data-filterkey="authorId" onChange={handleFilter}>
                    <option value="all">All</option>
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
            </aside>
            {_posts.length > 0 
                ? (
                    _posts.map((post) => <PostArticle key={post.id} {...post} />)
                ) : (
                    <h4>Loading posts...</h4>
                )
            }
        </Main>
    );
}

export default Content;
