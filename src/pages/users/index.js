import React, {Component} from 'react';
import insertIntoMainLayout from '../../utilities/decorators/insertIntoMainLayout';

@insertIntoMainLayout
export default class UsersPage extends Component {
    render(){
        return(
            <div>
                Users
            </div>
        )
    }
}