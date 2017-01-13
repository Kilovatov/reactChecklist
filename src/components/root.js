import React, { PropTypes } from 'react';
import { Provider } from 'react-redux';
import { Router, Route, browserHistory } from 'react-router';
import MainView from '../pages/main-view'
import EditTaskView from '../pages/edit-task-view'



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