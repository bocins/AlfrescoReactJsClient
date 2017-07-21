import React, {Component} from 'react';
import checkAuthenticated from '../../utilities/decorators/checkAuthenticated';
import insertIntoMainLayout from '../../utilities/decorators/insertIntoMainLayout';

@checkAuthenticated
@insertIntoMainLayout
export default class UserPage extends Component {
    render(){
        return(
            <div>
                User
            </div>
        )
    }
}