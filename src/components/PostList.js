import React from "react";

const PostList = ({posts, title}) => {

    return (
        <div className="post-list">
            <h2>{title}</h2>
            {posts.map(post => (
                <div className="post-preview" key={post.id}>
                    <a className="menu-item-link" href={`/posts/${post.id}`}>
                        <h3>{post.title}</h3>
                        <p>Written by {post.author}</p>
                    </a>
                </div>
            ))}
        </div>
    );
}

export default PostList;