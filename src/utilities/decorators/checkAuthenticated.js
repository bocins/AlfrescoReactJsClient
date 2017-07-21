import React from 'react';
import {getTicket} from '../Authentication';
import MainLayout from '../../common/layouts/main/index';

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
                <MainLayout
                    {...this.props}
                >
                    {page}
                </MainLayout>
            )
        }

    }

    return AuthenticatedRoute
}