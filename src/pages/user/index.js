import React, {Component} from 'react';

import insertIntoMainLayout from '../../utilities/decorators/insertIntoMainLayout';


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