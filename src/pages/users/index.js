import React, {Component} from 'react';
import checkAuthenticated from '../../utilities/decorators/checkAuthenticated';

import insertIntoMainLayout from '../../utilities/decorators/insertIntoMainLayout';

@checkAuthenticated
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