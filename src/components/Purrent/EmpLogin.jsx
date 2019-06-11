import React, {Component} from 'react';
import { Form, Button, Grid, Header } from 'semantic-ui-react';
import { Link } from "react-router-dom";

export default class EmpLogin extends Component {
    
    render(){
        return(
        <Grid>
        <Header>

        </Header>
            <Grid.Row centered>
                <Form>
                <Form.Field>
                <label htmlFor="empid">Enter your 3 Digit Number EmpID:</label>
                <input type='number' ref='empid' placeholder='empid'/>
                </Form.Field>

                <Link to='/purrent'>
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