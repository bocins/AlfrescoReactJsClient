import React, {Component} from 'react';
import MainMenu from '../../common/menus/mainMenu';

export default class MainPage extends Component {

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