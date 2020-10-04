import React, { Component } from 'react';
import classes from './style.css';
import {inject, observer} from 'mobx-react';

@inject(stores => ({
    doLogin: stores.session.loginAction
}))
@observer
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
                <input name="username" type="text" onChange={this.onInputChange} />
                <div>密码：</div>
                <input name="password" onChange={e => this.onInputChange(e)} />
                <button onClick={() => this.onLoginClick()}>登录</button>
                <button onClick={() => this.toggle()}>去注册</button>
            </div>
        );
    }

    renderRegister() {
        return (
            <div>
                <div>Register page</div>
                <div>账号：</div>
                <input />
                <div>密码：</div>
                <input />
                <div>确认密码：</div>
                <input />
                <button onClick={() => this.onRegisterClick()}>注册</button>
                <button onClick={() => this.toggle()}>去登录</button>
            </div>
        );
    }

    toggle() {
        this.setState({
            isLoginFunc: !this.state.isLoginFunc
        });
    }

    onLoginClick() {
        this.props.doLogin();
        console.log('onLoginClick.');
    }

    onRegisterClick() {
        console.log('onRegisterClick.');
    }

    onInputChange(e) {
        let inputValue = e.target.value;
        let inputName = e.target.name;
        console.log('-->  ' + inputName + ' : ' + inputValue);
    }
}
