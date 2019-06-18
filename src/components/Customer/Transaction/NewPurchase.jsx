import React, { Component } from 'react'
import { Button, Form, Grid, Header, Dropdown } from 'semantic-ui-react';
import { Link } from 'react-router-dom'

const boolOptions = [
    {key: 1, text: 'Yes', value: 1},
    {key: 0, text: 'No', value: 0}
]

class NewPurchase extends Component {
    state = {
        custid: null,
        animalid: null,
        rental: null,
        mchip: 0,
        insurance: 0,
    }
    
    handleTextChange = e => {
        this.setState({ [e.target.name]: e.target.value })
    }
    handleDropdownChange = (data) => {
        this.setState({ [data.name]: data.value })

    }
    render() {
        return (
            <Grid>
                <Grid.Row centered>
                    <Header />
                    <Form>
                        <Form.Field>
                            <label>CustID:</label>
                            <input placeholder='CustID' name='custid' onChange={this.handleTextChange} />
                        </Form.Field>
                        <Form.Field>
                            <label>AnimalID:</label>
                            <input type='text' name='animalid' placeholder='AnimalID' onChange={this.handleTextChange}/>
                        </Form.Field>
                        <Form.Field>
                            <label>Microchip:</label>
                            <Dropdown
                                placeholder='Please select an option'
                                options={boolOptions}
                                name='mchip'
                                onChange={this.handleDropdownChange} />
                        </Form.Field>
                        <Form.Field>
                            <label>Insurance:</label>
                            <Dropdown
                                placeholder='Please select an option'
                                options={boolOptions}
                                name='insurance'
                                onChange={this.handleDropdownChange} />                        </Form.Field>
                        <Link to='/customer-thank-you'>
                            <Button onClick={() => {
                                console.log(this.state)
                                console.log('validate animalid and custid exists, add to transaction and purchase tables')
                            }}> Submit </Button>
                        </Link>
                    </Form>
                </Grid.Row>
            </Grid>
        );
    };
}

export default NewPurchase;
