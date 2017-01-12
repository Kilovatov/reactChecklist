import React, { PropTypes } from 'react';
import { Provider } from 'react-redux';
import { Router, Route, browserHistory } from 'react-router';
import App from './../App';
import MainView from './../pages/MainView'
import EditTaskView from './../pages/EditTaskView'



const Root = ({ store }) => (
    <Provider store={store}>
        <Router history={browserHistory}>
            <Route path="/" component={MainView} />
            <Route path="/main" component={MainView} />
            <Route path="/main/(:id)" component={MainView} />
            <Route path="/edit/(:id)" component={EditTaskView} />
        </Router>
    </Provider>
);

Root.propTypes = {
    store: PropTypes.object.isRequired,
};

export default Root;