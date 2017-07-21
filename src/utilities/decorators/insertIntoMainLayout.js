import React from 'react';
import MainLayout from '../../common/layouts/main/index';

export default function insertIntoMainLayout(Component) {
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