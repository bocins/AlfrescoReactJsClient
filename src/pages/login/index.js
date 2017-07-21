import React, {Component} from 'react';
import Formsy from 'formsy-react';
import {FormsyText} from 'formsy-material-ui';
import RaisedButton from 'material-ui/RaisedButton';
import Dialog from 'material-ui/Dialog';
import {login} from '../../utilities/Authentication';

export default class LoginPage extends Component {

    enableButton = () => {
        this.setState({
            canSubmit: true,
        });
    };

    submitForm = (data) => {
        login(data.login, data.password).then(
            (isLogin) => {
                if(isLogin) {
                    const {history} = this.props;
                    history.replace('/')
                }else{
                    console.log("login fail");
                }
            },
        ).catch(() => {
            console.log("login error");
        })
    };

    render() {
        return (
            <Dialog
                open={true}
                title="Авторизация"
            >
                <Formsy.Form
                    onValid={this.enableButton}
                    onValidSubmit={this.submitForm}
                >
                    <FormsyText
                        name="login"
                        hintText="Логин"
                        floatingLabelText="Логин"
                        fullWidth={true}
                        required
                    />
                    <br/>
                    <FormsyText
                        name="password"
                        type="password"
                        hintText="Пароль"
                        floatingLabelText="Пароль"
                        fullWidth={true}
                        required
                    />
                    <br/>
                    <RaisedButton
                        type="submit"
                        label="Войти"

                    />
                </Formsy.Form>
            </Dialog>
        )
    }
}
