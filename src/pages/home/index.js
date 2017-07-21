import React, {Component} from 'react';
import checkAuthenticated from '../../utilities/decorators/checkAuthenticated';

@checkAuthenticated
export default class HomePage extends Component {
    render(){
        return(
            <div>
                Home
            </div>
        )
    }
}