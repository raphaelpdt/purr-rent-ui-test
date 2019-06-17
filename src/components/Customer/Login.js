import React, {Component} from 'react';
import { Form, Button, Grid, Header } from 'semantic-ui-react';
import { Link } from "react-router-dom";

export default class Login extends Component {
    
    render(){
        return(
        <Grid>
        <Header>

        </Header>
            <Grid.Row centered>
                <Form>
                <Form.Field>
                <label htmlFor="custid">Enter your 3 Digit Number CustID:</label>
                <input type='number' ref='custid' placeholder='CustID'/>
                </Form.Field>

                <Link to='/customer'>
                <Button> Login </Button>
                </Link>
                {/* <Form success>
                <Message success header='Form Completed' content="You're all signed up!" /> */}
                </Form> 
            </Grid.Row>
        </Grid>
        );
    };
}