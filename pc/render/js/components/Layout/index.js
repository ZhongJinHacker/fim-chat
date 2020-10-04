/**
 * 主布局
 */
import React, { Component } from 'react';
import LoginOrRegisterPage from '../../pages/LoginOrRegister';

function isLogin() {
    return false;
}

export default class Layout extends Component {
    render() {
        if (!isLogin()) {
            return <LoginOrRegisterPage />;
        }

        return (<div>hello</div>);
    }
}
