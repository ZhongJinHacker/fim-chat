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
                login page
            </div>
        );
    }

    renderRegister() {
        return (
            <div>
                Register page
            </div>
        );
    }
}
