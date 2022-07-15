import React, {useEffect, useState} from 'react';
import {Link, useParams} from 'react-router-dom';
import {styled} from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';

const PostList = (props) => {
    const [postData, setPostData] = useState([]);
    const [commentData, setCommentData] = useState([]);
    const [relatedData, setRelatedData] = useState([]);

    const {postId, userId} = useParams();

    const Item = styled(Paper)(({ theme }) => ({
        backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
        ...theme.typography.body2,
        padding: theme.spacing(1),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    }));

    useEffect(() => {

        const getData = async () => {
            const postApi = `https://jsonplaceholder.typicode.com/posts`;
            const commentApi = `https://jsonplaceholder.typicode.com/comments`;
            try {
                const postResp = await fetch (postApi + '?id=' + postId);
                const postInfo = await postResp.json();
                const commentResp = await fetch (commentApi + '?postId=' + postId);
                const commentInfo = await commentResp.json();
                const relatedPost = await fetch (postApi + '?userId=' + userId);
                const relatedInfo = await relatedPost.json();
                
                setPostData(postInfo);
                setCommentData(commentInfo);
                setRelatedData(relatedInfo);
            } catch (err) {
                console.error(err);
            }
        }

        getData();
    }, [postId, userId]);

    return (
        <div>
            <Link to={'/'}>
                <Button variant='contained' color='primary'>Return Home</Button>
            </Link>
            <Grid container spacing={2}>
                <Grid item xs={8}>
                    <Item>
                        {postData.map((info, index) => (
                            <div key={'Post'+index}>
                                <h2>{info.title}</h2>
                                <div>
                                    <p>{info.body}</p>
                                </div>
                            </div>
                        ))}
                    </Item>
                    <Item>
                        <h2>Post Comments</h2>
                        {commentData.map((comments, index) => (
                            <div key={'Comment'+index}>
                                <p>{comments.body}</p>
                            </div>
                        ))}
                    </Item>
                </Grid>
                <Grid item xs={4}>
                    <h2>Posts From This Author</h2>
                    <ul>
                        {relatedData.map((article, index) => (
                            <li>
                                <Link 
                                    to={{
                                        pathname: '/postDetail/'+article.id+'/'+article.userId,
                                        state: {stateParam: true}
                                    }} 
                                    key={'Post' + index}
                                >
                                    {article.title}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </Grid>
            </Grid>
            
        </div>
    )
};

export default PostList;