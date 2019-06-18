import React, {Component} from 'react';
import { Form, Button, Grid, Header } from 'semantic-ui-react';
import { Link } from "react-router-dom";

export default class EmpLogin extends Component {
    state = { empid: 'EmpID' }

    getID = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    }
    
    render(){
        const { value } = this.state.empid;

        return(
        <Grid>
        <Header>

        </Header>
            <Grid.Row centered>
                <Form>
                <Form.Field>
                <label htmlFor="empid">Enter your 3 Digit Number EmpID:</label>
                <input type='text' name='empid' placeholder='empid'/>
                </Form.Field>

                <Link to={{pathname: '/purrent', state: this.state.empid}}>
                <Button onClick = {this.setState(value)}> Login </Button>
                </Link>
                {/* <Form success>
                <Message success header='Form Completed' content="You're all signed up!" /> */}
                </Form> 
            </Grid.Row>
        </Grid>
        );
    };
}