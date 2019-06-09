import React, {Component} from 'react'
import { Form, Checkbox, Button, Grid, Header } from 'semantic-ui-react';


export default class CustUpdate extends Component {

  updateCustomer = (event) => {
    event.preventDefault();

    let data = {
      custid: this.refs.custid.value,
      name: this.refs.name.value,
      address: this.refs.address.value,
      phoneNum: this.refs.pnum.value
    }
    console.log(data);

    // Send req to server
    // var request = new Request('http://localhost:3000/api/new-customer', {
    //   method: 'POST',
    //   header: new Headers( { 'Content-Type': 'application/kson'}),
    //   body: JSON.stringify(data);
    // });

    // fetch(request)
    // .then(function(response) {
    //   response.json().then(function(data) {
    //     console.log(data);
    //   })
    // });
  };

  render() {
    return(
        <Grid>
            <Header>

            </Header>
        <Grid.Row centered>
        <Form>
        <Form.Field>
        <label htmlFor="custid">Enter a 3 Digit Number CustID:</label>
        <input type='number' ref='custid' placeholder='CustID'/>
        </Form.Field>
        <Form.Field>
        <label htmlFor="name">Name:</label>
          <input type='text' ref='name' placeholder='Name'/>
        </Form.Field>
        <Form.Field>
            <label htmlFor="address">Address:</label>
            <input type='text' ref='address' placeholder='Address'/>
        </Form.Field>
        <Form.Field>
            <label htmlFor="pnum">Phone Number:</label>
            <input type='number' ref='pnum' placeholder='Phone Number' />
        </Form.Field>
        <Button onClick={this.updateCustomer.bind(this)}> Submit </Button>
      
        </Form> 
        </Grid.Row>
        </Grid>
    );
  };
}