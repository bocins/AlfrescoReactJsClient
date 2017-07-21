import React from 'react';
import MainLayout from '../../common/layouts/main/index';
import checkAuthenticated from './checkAuthenticated';

export default function insertIntoMainLayout(Component) {
    @checkAuthenticated
    class ContainerPage extends React.Component {
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
    return ContainerPage;
}