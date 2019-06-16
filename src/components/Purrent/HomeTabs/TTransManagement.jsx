import React, { Component } from 'react'
import { Button, Item, Icon, Label, Message } from 'semantic-ui-react';

export default class TTransManagement extends Component {
    render() {
        return (
            <div>
                <Button.Group basic attached='bottom'>
                    <Button>Add</Button>
                    <Button>Remove</Button>
                </Button.Group>
            </div>
        )
    }
}