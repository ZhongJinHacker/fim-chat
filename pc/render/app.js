import React, { Component } from 'react';
import { render } from 'react-dom';
import { Provider } from 'mobx-react';
import { HashRouter } from 'react-router-dom';
import getRoutes from './js/routes/routes';
import stores from './js/stores/index';

class App extends Component {
    render() {
        return (
            <Provider {...stores} >
                <HashRouter ref="navigator">
                    {getRoutes()}
                </HashRouter>
            </Provider>
        );
    }
}

render(
    <App />,
    document.getElementById('root')
);
