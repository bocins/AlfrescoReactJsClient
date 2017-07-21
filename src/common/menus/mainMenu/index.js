import React, {Component} from 'react';
import {Toolbar, ToolbarGroup} from 'material-ui/Toolbar';
import MenuItem from 'material-ui/MenuItem';
import IconMenu from 'material-ui/IconMenu';
import IconButton from 'material-ui/IconButton';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import {logout} from '../../../utilities/Authentication';

export default class MainMenu extends Component {

    constructor(props){
        super(props);
        this.history = props.history;
    }

    onExit = () => {
        logout().then(() =>
            this.history.replace('/login'),
        );
    };

    goToPage = (url) => {
        this.history.push(url);
    };

    render() {
        return (
            <Toolbar>
                <ToolbarGroup>
                    <MenuItem
                        primaryText="Домашняя"
                        onTouchTap={this.goToPage.bind(this, '/')}
                    />
                    <MenuItem
                        primaryText="Пользователи"
                        onTouchTap={this.goToPage.bind(this, '/users')}
                    />
                </ToolbarGroup>
                <ToolbarGroup>
                    <IconMenu
                        iconButtonElement={<IconButton><MoreVertIcon/></IconButton>}
                    >
                        <MenuItem
                            primaryText="Выход"
                            onTouchTap={this.onExit}
                        />
                    </IconMenu>
                </ToolbarGroup>
            </Toolbar>
        )
    }
}
