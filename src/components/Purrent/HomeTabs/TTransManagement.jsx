import React, { Component } from 'react'
import { Dropdown, Button, Form } from 'semantic-ui-react';

const searchOptions = [
    {key: 'name', value: 'name', text: 'Customer Name'},
    {key: 'custid', value: 'custid', text: 'Customer ID'},
    {key: 'transid', value: 'transid', text: 'Transaction ID'}
]

export default class TTransManagement extends Component {
    state = {
        search: null,
        input:''
    }

    handleDropdownChange = (e, data) => {
        this.setState({ [data.name]: data.value })

    }
    
    handleTextChange = e => {
        this.setState({[e.target.name]: e.target.value}, console.log(this.state))      
    }
    render() {
        return (
            // <div>
        
            //     <Button.Group basic attached='bottom'>
            <Form>
                <Form.Field>
                            <label>Select a search option:</label>
                            <Dropdown
                                placeholder='Please select an option'
                                options={searchOptions}
                                name='search'
                                onChange={this.handleDropdownChange} />
                        </Form.Field>
                <Form.Field>
                    <label htmlFor='input'>Search value:</label>
                    <input 
                        type='text' 
                        placeholder='Search value' 
                        name='input' 
                        onChange={this.handleTextChange}/>
                </Form.Field>
                <Button onClick={() => {
                                console.log(this.state)
                                console.log('search %__% input then display results')
                            }}> Search </Button>
            </Form>
                )
            }
}