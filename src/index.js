import React from 'react';
import {render} from 'react-dom';
import Home from './pages/home';
import Login from './pages/login';
import User from './pages/user';
import Users from './pages/users';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';

injectTapEventPlugin();

render(
    <MuiThemeProvider>
        <Router>
            <div>
                <Route exact path="/" component={Home}/>
                <Route exact path="/login" component={Login}/>
                <Route path="/users" component={Users} />
                <Route path="/user/:id" component={User} />
            </div>
        </Router>
    </MuiThemeProvider>,
    document.getElementById('app'),
);