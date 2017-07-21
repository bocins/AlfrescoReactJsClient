import React, {Component} from 'react';
import insertIntoMainLayout from '../../utilities/decorators/insertIntoMainLayout';

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