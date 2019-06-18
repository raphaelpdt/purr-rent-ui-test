import React, { Component } from 'react'
import { Dropdown, Button, Form, Grid, Header } from 'semantic-ui-react';
import { Link } from 'react-router-dom'

const payOptions = [
    { key: 'visa', value: 'visa', text: 'Visa' },
    { key: 'mc', value: 'mc', text: 'Mastercard' },
    { key: 'debit', value: 'debit', text: 'Debit' }
]
class NewRental extends Component {

    state = {
        custid: this.props.location.state,
        animalid: null,
        start: null,
        end: null,
        paymethod: null,
    }

    handleTextChange = e => {
        this.setState({ [e.target.name]: e.target.value })
    }
    handleDropdownChange = (e, data) => {
        this.setState({ [data.name]: data.value })

    }
    
    render() {
        
        return (
<<<<<<< HEAD
        <Grid>
            <Grid.Row centered>
                <Header/>
                <Form>
                    <Form.Field>
                        <label>CustID:</label>
                        <input placeholder={this.state.custid} name='custid'/>
                    </Form.Field>
                    <Form.Field>
                        <label>AnimalID:</label>
                        <input type='text' ref='animalid' placeholder='AnimalID'/>
                    </Form.Field>
                    <Form.Field>
                        <label htmlFor="address">Rental Term:</label>
                        <input type='text' ref='address' placeholder='Address'/>
                    </Form.Field>
                    <Form.Field>
                        <label htmlFor="pnum">Start Date:</label>
                        <input type='number' ref='pnum' placeholder='Start Date' />
                    </Form.Field>
                    <Form.Field>
                        <label htmlFor="pnum">Return Date:</label>
                        <input type='number' ref='pnum' placeholder='Return Date' />
                    </Form.Field>
                    <Link to='/customer-thank-you'>
                    <Button> Submit </Button>
                    </Link>
                </Form>
            </Grid.Row>
        </Grid>
=======
            <Grid>
                <Grid.Row centered>
                    <Header />
                    <Form>
                        <Form.Field>
                            <label>CustID:</label>
                            <input placeholder='CustID' name='custid' onChange={this.handleTextChange}/>
                        </Form.Field>
                        <Form.Field>
                            <label>AnimalID:</label>
                            <input type='text' name='animalid' placeholder='AnimalID' onChange={this.handleTextChange}/>
                        </Form.Field>
                        <Form.Field>
                            <label htmlFor="pnum">Start Date:</label>
                            <input type='text' name='start' placeholder='(YYYY-MM-DD)' onChange={this.handleTextChange}/>
                        </Form.Field>
                        <Form.Field>
                            <label htmlFor="pnum">Return Date:</label>
                            <input type='text' name='end' placeholder='(YYYY-MM-DD)' onChange={this.handleTextChange}/>
                        </Form.Field>
                        <Form.Field>
                            <label>Please select a payment method:</label>
                            <Dropdown
                                placeholder='Please select an option'
                                options={payOptions}
                                name='paymethod'
                                onChange={this.handleDropdownChange} />
                        </Form.Field>
                        <Link to='/customer-thank-you'>
                            <Button onClick={() => {
                                console.log(this.state)
                                console.log('validate animalid and custid exists, add to transaction and rental tables')
                            }}> Submit </Button>
                        </Link>
                    </Form>
                </Grid.Row>
            </Grid>
>>>>>>> fcf515263226a056b0266b19c9b2b310d0842a24
        );
    };
}

export default NewRental;
