
import React from 'react';
import { withRouter, Route, Switch } from 'react-router-dom';

import Home from '../pages/Home';
import Layout from '../components/Layout';

const MainLayout = withRouter(props => <Layout {...props} />);

export default () => {
    /* eslint-disable */
    return (
        <MainLayout>
            <Switch>
                <Route exact path="/" component={Home} />
            </Switch>
        </MainLayout>
    );
    /* eslint-disable */
};
