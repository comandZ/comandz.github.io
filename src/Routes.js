import React from "react";
import {
    BrowserRouter as Router,
    Route,
    Routes
} from "react-router-dom";
import Build from "./containers/Build";
import Home from "./containers/Home";
import PostDetail from "./containers/PostDetail";
import PostList from "./containers/PostList";
import Socks from "./containers/Socks";
import Testing from "./containers/Testing";
import TicTac from "./containers/TicTac";

const Routing = () => {

    return (
        <Router>
            <Routes>
                <Route path='/' component={<Home/>}/>
                <Route path="/build" element={<Build/>}/>
                <Route exact path="/postlist" element={<PostList/>}/>
                <Route path="/postDetail/:postId/:userId" element={<PostDetail/>}/>
                <Route path="/postDetail/:postId" element={<PostDetail/>}/>
                <Route path="/socks" element={<Socks/>}/>
                <Route path="/testing" element={<Testing/>}/>
                <Route path="/tictac" element={<TicTac/>}/>
            </Routes>
        </Router>
    );
}

export default Routing;