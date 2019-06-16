import React, { Component } from 'react'
import {Button} from 'semantic-ui-react';
import { Link } from 'react-router-dom'
import EmpPosting from '../EmpPosting';

export default class TAnimalManagement extends Component {
    render() {
        return (
            <div>
                    <EmpPosting />
                    <Button.Group attached='bottom'>
                        <Link to='/new-animal'>
                            <Button color='pink'>Add New Animal</Button>
                        </Link>
                    </Button.Group>
                </div>
        )
    }
}