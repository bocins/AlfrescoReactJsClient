import React, {Component} from 'react';
import checkAuthenticated from '../../utilities/decorators/checkAuthenticated';
import insertIntoMainLayout from '../../utilities/decorators/insertIntoMainLayout';

@checkAuthenticated
@insertIntoMainLayout
export default class HomePage extends Component {
    render(){
        return(
            <div>
                Home
            </div>
        )
    }
}