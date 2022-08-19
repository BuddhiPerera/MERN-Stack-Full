import React, {Component} from 'react';
import {BrowserRouter, Route} from 'react-router-dom';

import Login from "./pages/Login";
import Register from "./pages/Register";

class App extends Component {
    render() {
        return (<div>
                <BrowserRouter>
                    <Route exact path="/login" component={Login}/>
                    <Route exact path="/register" component={Register}/>
                </BrowserRouter>
            </div>
        )
    }
}

export default App;