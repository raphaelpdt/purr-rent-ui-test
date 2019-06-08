import React, { Component } from 'react'
import { Button, Form, Grid, Checkbox, Header } from 'semantic-ui-react';

class NewPurchase extends Component {
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
                     <label>Rental Term:</label>
                     <input type='text' ref='rental' placeholder='Rental Term'/>
                  </Form.Field>
                  <Form.Field>
                       <label>Microchip:</label>
                       <input type='radio' ref='mchip'/>
                   </Form.Field>
                   <Form.Field>
                       <label>Insurance:</label>
                       <input type='radio' ref='insurance'/>
                   </Form.Field>
                   <Button> Submit </Button>
            </Form>
        </Grid.Row>
    </Grid>
        );
    };
}

export default NewPurchase;
