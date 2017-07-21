import React from 'react';
import {getTicket} from '../Authentication';

export default function checkAuthenticated(Component) {
    class AuthenticatedRoute extends React.Component {

        componentWillMount() {
            const {history} = this.props;
            if (!getTicket()) {
                history.replace('/login')
            }
        }

        render() {
            return React.createElement(
                Component,
                {...this.props},
            )
        }

    }

    return AuthenticatedRoute
}