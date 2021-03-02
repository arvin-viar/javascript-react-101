import { useState, useEffect } from "react";
import styled from "styled-components";
import ArticleItem from "../components/posts/ArticleItem";
import CuratedPosts from "../components/posts/CuratedPosts";
import Categories from "../components/posts/Categories";
import { sortPosts, getFilteredPosts } from "../helpers/helper";
import { randomPosts } from "../helpers/helper";
import Loader from "../components/Loader";

const ArticlesSection = styled.section`
    position: relative;
    min-height: 500px;
    padding: 0;
    .row {
        margin-left: -15px;
        margin-right: -15px;
    }
    .articles__header {
        margin-bottom: 15px;
        padding: 0 15px;
        h1 {
            padding: 10px 0px;
            color: #0466c8;
            text-align: center;
            text-transform: uppercase;
            border-top: 1px solid #11192d;
            border-bottom: 1px solid #11192d;
        }
        &-options {
            padding: 15px 0;
            margin-bottom: 15px;
    
            select {
                width: 100%;
                margin: 0 0 15px;
    
                &:last-child {
                    margin-bottom: 0;
                }
                @media (min-width: 768px) {
                    width: auto;
                    margin: 0 15px 0 0;
                }
            }
        }
    }
`

const Container = styled.div`
    max-width: 1024px;
    margin: 0 auto;
`

const ArticlesList = styled.div`
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    padding: 0 15px;
    &::after {
        content: "";
        flex: 0 0 32%;
    }
`

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
            <CuratedPosts posts={_topThree} />
            <ArticlesSection>
                <Container>
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
                    <ArticlesList>
                        {_posts.length > 0 
                            ? (
                                _posts.map((post) => <ArticleItem key={post.id} {...post} />)
                            ) : (
                                <Loader />
                            )
                        }
                    </ArticlesList>
                </Container>
            </ArticlesSection>
        </main>
    );
}

export default ArticlesPage;
