import React from 'react';
import PostList from '../components/PostList';
import useFetch from '../components/tools/useFetch';

const Home = () => {
    const dataLink = 'http://localhost:3000/posts';
    const {
        data: posts, 
        isPending, 
        error
    } = useFetch(dataLink);


    return (
        <div>
            {error && <div>{error}</div>}
            {isPending && <div>Loading...</div>}
            <h2>Home Page</h2>
            <PostList posts={posts} title="All Posts"/>
        </div>
    );
}

export default Home;