import React, {Component} from 'react';
import checkAuthenticated from '../../utilities/decorators/checkAuthenticated';

@checkAuthenticated
export default class UserPage extends Component {
    render(){
        return(
            <div>
                User
            </div>
        )
    }
}