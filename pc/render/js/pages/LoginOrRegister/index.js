import React, { Component } from 'react';
import classes from './style.css';

export default class LoginOrRegister extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoginFunc: true
        };
    }

    render() {
        return (
            <div className={classes.container}>
                {
                    this.state.isLoginFunc ? this.renderLogin() : this.renderRegister()
                }
            </div>
        );
    }

    renderLogin() {
        return (
            <div>
                <div>账号：</div>
                <input />
                <div>密码：</div>
                <input />
                <button onClick={() => this.onLoginClick()}>登录</button>
                <button onClick={() => this.toggle()}>去注册</button>
            </div>
        );
    }

    renderRegister() {
        return (
            <div>
                <div>Register page</div>
                <div onClick={() => this.toggle()}>去登录</div>
            </div>
        );
    }

    toggle() {
        this.setState({
            isLoginFunc: !this.state.isLoginFunc
        });
    }

    onLoginClick() {
        console.log('onLoginClick.');
    }
}
