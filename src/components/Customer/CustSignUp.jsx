import React from 'react'
import { Form, Checkbox, Button, Grid, Header } from 'semantic-ui-react';

function saveCustomer() {
    let cid = document.getElementById('custid')
    console.log(cid);
};

const CustSignUp = () => (
    <Grid>
        <Header>

        </Header>
        <Grid.Row centered>
    <Form>
    <Form.Field>
    <label htmlFor="custid">Enter a 3 Digit Number CustID:</label>
      <input name='custid' placeholder='CustID' />
    </Form.Field>
    <Form.Field>
    <label htmlFor="name">Name:</label>
      <input placeholder='Name' />
    </Form.Field>
    <Form.Field>
         <label htmlFor="address">Address:</label>
         <input placeholder='Address' />
    </Form.Field>
    <Form.Field>
         <label htmlFor="pnum">Phone Number:</label>
         <input placeholder='Phone Number' />
    </Form.Field>
    <Form.Field>
      <Checkbox label='I agree to the Terms and Conditions' />
    </Form.Field>
    <Button color='yellow' onClick={saveCustomer} Submit </Button>
    {/* <Form success>
    <Message success header='Form Completed' content="You're all signed up!" />
    
  </Form> */}
    </Form> 
    </Grid.Row>
    </Grid>
    );

export default CustSignUp;
