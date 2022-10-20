import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { QueryClient, QueryClientProvider, useQuery } from 'react-query';

const DetailPage = () => {
    const dataLink = 'http://localhost3000/posts/';
    const {id} = useParams();
    console.log(id);
    const {
        isLoading, 
        error, 
        data: post,
    } = useQuery(
        'postDetails', () => fetch(
            dataLink + id
        ).then(
            res => res.json()
        )
    );
    const history = useNavigate();
    const queryClient = new QueryClient();
    console.log('Post', post);

    const handleClick = () => {
        fetch(dataLink + post.id, {
            method: 'DELETE'
        }).then(() => {
            history.push('/');
        });
    }



    return (
        <QueryClientProvider client={queryClient}>
            <div className="postDetail">
                {isLoading && <div>Loading...</div>}
                {error && <div>{error}</div>}
                <article>
                    <h2>{post.title}</h2>
                    <p>Written by {post.author}</p>
                    <div>{post.body}</div>
                    <button onClick={handleClick}>Delete</button>
                </article>
            </div>
        </QueryClientProvider>
    );
}

export default DetailPage;