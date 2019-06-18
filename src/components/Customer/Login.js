import React, {Component} from 'react';
import { Form, Button, Grid, Header } from 'semantic-ui-react';
import { Link } from "react-router-dom";

export default class Login extends Component {
    state = { custid: 'CustID' }

    getID = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    }
    
    render(){
        const { value } = this.state.custid;

        return(
        <Grid>
        <Header>

        </Header>
            <Grid.Row centered>
                <Form>
                <Form.Field>
                <label htmlFor="custid">Enter your 3 Digit Number CustID:</label>
                <input type='text' name='custid' placeholder={this.state.custid} onChange={this.getID}/>
                </Form.Field>

                <Link to={{pathname: '/customer', state: this.state.custid}}>
                <Button onClick = {this.setState(value, () =>{console.log(this.state.custid)})}> Login </Button>
                </Link>
                {/* <Form success>
                <Message success header='Form Completed' content="You're all signed up!" /> */}
                </Form> 
            </Grid.Row>
        </Grid>
        );
    };
}