import React, { Component } from 'react'
import { Button, Form, Grid, Header } from 'semantic-ui-react';
import { Link } from 'react-router-dom'

class NewRental extends Component {
    render() {
        return (
    <Grid>
        <Grid.Row centered>
            <Header/>
            <Form>
                <Form.Field>
                    <label>CustID:</label>
                    <input placeholder='CustID' name='custid'/>
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
        );
    };
}

export default NewRental;
