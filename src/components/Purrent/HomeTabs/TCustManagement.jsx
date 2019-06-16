import React, { Component } from 'react'
import { Button } from 'semantic-ui-react';
import { NavLink } from 'react-router-dom';

export default class TCustManagement extends Component {
    render() {
        return (

            <div><Button.Group attached='bottom'>
                <NavLink to='/customer-signup'>
                    <Button fluid>Add</Button>
                </NavLink>
                <NavLink to='/customer-remove'>
                    <Button fluid>Remove</Button>
                </NavLink>
            </Button.Group>
            </div>
        )
    }
}