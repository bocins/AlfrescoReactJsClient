import React from 'react';
import {getTicket} from '../Authentication';
import MainPage from '../../pages/main';

export default function checkAuthenticated(Component) {
    class AuthenticatedRoute extends React.Component {

        componentWillMount() {
            const {history} = this.props;
            if (!getTicket()) {
                history.replace('/login')
            }
        }

        render() {
            const page = React.createElement(
                Component,
                {...this.props},
            );
            return (
                <MainPage
                    {...this.props}
                >
                    {page}
                </MainPage>
            )
        }

    }

    return AuthenticatedRoute
}