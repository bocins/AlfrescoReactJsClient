import React, {Component} from 'react';
import {Toolbar, ToolbarGroup} from 'material-ui/Toolbar';
import MenuItem from 'material-ui/MenuItem';
import DropDownMenu from 'material-ui/DropDownMenu';
import IconMenu from 'material-ui/IconMenu';
import IconButton from 'material-ui/IconButton';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import {logout} from '../../../utilities/Authentication'

export default class MainMenu extends Component {

    onExit = () => {
        const {history} = this.props;
        logout().then(() =>
            history.replace('/login'),
        );
    };

    render() {
        return (
            <Toolbar>
                <ToolbarGroup>
                    <DropDownMenu
                    >

                    </DropDownMenu>
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
