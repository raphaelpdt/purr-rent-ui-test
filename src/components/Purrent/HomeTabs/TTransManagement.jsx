import React, { Component } from 'react'
import { Button, Item, Icon, Label, Message, Form, FormField } from 'semantic-ui-react';

export default class TTransManagement extends Component {
    state = {
        name: '',
        custid: '',
        transid: '',

    }
    handleTextChange = e => {
        this.setState({[e.target.name]: e.target.value}, console.log(this.state))      
    }
    render() {
        return (
            // <div>
        
            //     <Button.Group basic attached='bottom'>
            <Form>
                <h> Search for Transactions</h>
                <Form.Field>
                    <label htmlFor='name'>Name:</label>
                    <input 
                        type='text' 
                        placeholder='Customer Name' 
                        name='name' 
                        onChange={this.handleTextChange}/>
                </Form.Field>
                <Form.Field>
                    <label htmlFor='custid'>Enter a 3 Digit Customer ID:</label>
                    <input 
                        type='text' 
                        placeholder='Customer ID' 
                        name='custid' 
                        onChange={this.handleTextChange}/>
                </Form.Field>
                <Form.Field>
                    <label htmlFor='transid'>Enter a 5 Digit Transaction ID:</label>
                    <input 
                        type='text' 
                        placeholder='Transaction ID' 
                        name='transid' 
                        onChange={this.handleTextChange}/>
                </Form.Field>
            </Form>
            //             <Button>Add</Button>
            //             <Button>Remove</Button>
            //         </Button.Group>
            // </div>
                )
            }
}