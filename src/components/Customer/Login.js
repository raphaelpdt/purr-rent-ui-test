import React, {Component} from 'react';
import axios from 'axios';
import { Form, Button, Grid, Header } from 'semantic-ui-react';
import { Link } from "react-router-dom";
import { async } from 'q';

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      custid: ''
    }
  }
    getID = (e) => {
        console.log(e.target.name)
        console.log(e.target.value)
        this.setState({ [e.target.name]: e.target.value });
    }

    makeFetch = async (data) => {
        const { history } = this.props
        const res = await axios.post('/api/customers/login', data);
        // console.log(this.props);
        // console.log('1 '+res.data);
        // console.log(res.status);
        // console.log(res.data)
        this.setState({custid: res.data})
        // console.log(this.state.custid);
        // console.log(this.state.test); 
        if (res.status===200){
          history.push('/customer', res.data)
        }
    }
    
    render(){
        return(
        <Grid>
        <Header>

        </Header>
            <Grid.Row centered>
                <Form>
                <Form.Field>
                <label htmlFor="custid">Enter your 3 Digit Number CustID:</label>
                <input type='text' name='custid' placeholder='Customer ID' onChange={this.getID}/>
                </Form.Field>

                {/* <Link to={{pathname: '/customer', state: this.state.custid}}>
                Login */}
                <Button onClick={() => this.makeFetch(this.state)} > Login </Button>
                {/* </Link> */}
                {/* <Form success>
                <Message success header='Form Completed' content="You're all signed up!" /> */}
                </Form> 
            </Grid.Row>
        </Grid>
        );
    };
}