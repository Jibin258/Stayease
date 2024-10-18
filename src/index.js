import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as HashRouter, Route, Switch } from "react-router-dom";

import HomeV1 from './components/home-v1'
import About from './components/about'
import Blog from './components/blog'
import Contact from './components/contact'



class Root extends Component {
    render() {
        return(
                <HashRouter basename="/">
	                <div>
	                <Switch>
	                    <Route exact path="/" component={HomeV1} />
                        <Route path="/about" component={About} />
                        <Route path="/blog" component={ Blog } />
                        <Route path="/contact" component={ Contact } />
	                </Switch>
	                </div>
                </HashRouter>
        )
    }
}

export default Root

ReactDOM.render(<Root />, document.getElementById('quarter'));