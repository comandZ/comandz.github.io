import React from "react";
import {
    BrowserRouter as Router,
    Route,
    Routes
} from "react-router-dom";
import {QueryClient, QueryClientProvider} from 'react-query';
import Build from "./containers/Build";
import Home from "./containers/Home";
import PostDetail from "./containers/PostDetail";
import PostList from "./containers/PostList";
import Socks from "./containers/Socks";
import Testing from "./containers/Testing";
import TicTac from "./containers/TicTac";
import CreatePost from "./components/CreatePost";
import PostDetailCMS from "./containers/PostDetailCMS";

const Routing = () => {
    const queryClient = new QueryClient();
    return (
        <QueryClientProvider client={queryClient}>
            <Router>
                <Routes>
                    <Route path='/' element={<Home/>}/>
                    <Route path="/build" element={<Build/>}/>
                    <Route exact path="/postlist" element={<PostList/>}/>
                    <Route path="/postDetail/:postId/:userId" element={<PostDetail/>}/>
                    <Route path="/postDetail/:postId" element={<PostDetail/>}/>
                    <Route path="/socks" element={<Socks/>}/>
                    <Route path="/testing" element={<Testing/>}/>
                    <Route path="/tictac" element={<TicTac/>}/>
                
                    <Route path="/create" element={<CreatePost/>}/>
                    <Route path="/posts/:id" element={<PostDetailCMS/>}/>
                </Routes>
            </Router>
        </QueryClientProvider>
    );
}

export default Routing;