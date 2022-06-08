import React from "react";
import {
    BrowserRouter as Router,
    Route,
    Routes
} from "react-router-dom";
import PostList from "./containers/PostList";
import PostDetail from "./containers/PostDetail";
import Socks from "./containers/Socks";
import Testing from "./containers/Testing";

const Routing = () => {

    return (
        <Router>
            <Routes>
                <Route exact path="/" element={<PostList/>}/>
                <Route path="/postDetail/:postId/:userId" element={<PostDetail/>}/>
                <Route path="/postDetail/:postId" element={<PostDetail/>}/>
                <Route path="/socks" element={<Socks/>}/>
                <Route path="/testing" element={<Testing/>}/>
            </Routes>
        </Router>
    );
}

export default Routing;