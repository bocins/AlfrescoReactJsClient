import React, {Component} from 'react';
import checkAuthenticated from '../../utilities/decorators/checkAuthenticated';

@checkAuthenticated
export default class UsersPage extends Component {
    render(){
        return(
            <div>
                Users
            </div>
        )
    }
}