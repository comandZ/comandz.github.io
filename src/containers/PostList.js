import React, {useEffect, useState} from 'react';
import {Link} from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';

const PostList = () => {
    const [postData, setPostData] = useState([]);

    useEffect(() => {
        const getData = async () => {
            const postApi = 'https://jsonplaceholder.typicode.com/posts';

            try {
                const resp = await fetch (postApi);
                const data = await resp.json();
                setPostData(data);
            } catch (err) {
                console.error(err);
            }
        }

        getData();
    }, []);

    return (
        <div>
            <h1>Post Listing</h1>
            <Grid 
                container 
                spacing={3}
                justifyContent='center'
                alignItems='stretch'
            >
                {postData.map((info, index) => (
                    <Grid item xs={4} key={'PostItem' + index}>
                        <Link 
                            to={{
                                pathname: '/postDetail/'+info.id+'/'+info.userId,
                                state: {stateParam: true}
                            }} 
                            
                        >
                            <Button variant='contained' color='primary'>
                                <h2>{info.Name}</h2>
                                <div>
                                    <p>{info.title}</p>
                                </div>
                            </Button>
                        </Link>
                    </Grid>
                ))}
            </Grid>
        </div>
    )
};

export default PostList;