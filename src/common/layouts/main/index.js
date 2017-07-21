import React from 'react';
import MainMenu from '../../menus/mainMenu/index';

export default class MainLayout extends React.Component {
    render() {
        return (
            <div>
                <MainMenu
                    {...this.props}
                />
                {this.props.children}
            </div>
        )
    }
}


