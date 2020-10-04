/**
 * 主布局
 */
import React, { Component } from 'react';
import LoginOrRegisterPage from '../../pages/LoginOrRegister';
import ipcRenderProxy from '../../../rpcRenderProxy';

function isLogin() {
    return false;
}

export default class Layout extends Component {
    render() {
        if (!isLogin()) {
            return <LoginOrRegisterPage />;
        }

        ipcRenderProxy.send('logined');

        return (<div>hello</div>);
    }
}
