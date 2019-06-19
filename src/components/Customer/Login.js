import React, {Component} from 'react';
<<<<<<< HEAD
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
=======
import { Form, Button, Grid, Header } from 'semantic-ui-react';
import { Link } from "react-router-dom";

export default class Login extends Component {
    state = { custid: 'CustID' }

>>>>>>> f90301a7c892297970d67504e5ba989be112cb52
    getID = (e) => {
        console.log(e.target.name)
        console.log(e.target.value)
        this.setState({ [e.target.name]: e.target.value });
    }

<<<<<<< HEAD
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
=======
    makeFetch(data) {
        console.log(data);
        var request = new Request('http://localhost:3000/api/customers/login', {
            method: 'POST',
            header: new Headers( { 'Content-Type': 'application/json'}),
            body: JSON.stringify(data)
        });
        fetch(request)
        .then(response => {
          if (response.status === 200) {
            return response.json();
          } else {
            throw new Error('Something went wrong on api server!');
          }
        }).catch(error => {
            console.error(error);
          });
        
    }
    
    render(){
        const { value } = this.state.custid;

>>>>>>> f90301a7c892297970d67504e5ba989be112cb52
        return(
        <Grid>
        <Header>

        </Header>
            <Grid.Row centered>
                <Form>
                <Form.Field>
                <label htmlFor="custid">Enter your 3 Digit Number CustID:</label>
<<<<<<< HEAD
                <input type='text' name='custid' placeholder='Customer ID' onChange={this.getID}/>
                </Form.Field>

                {/* <Link to={{pathname: '/customer', state: this.state.custid}}>
                Login */}
                <Button onClick={() => this.makeFetch(this.state)} > Login </Button>
                {/* </Link> */}
=======
                <input type='text' name='custid' placeholder={this.state.custid} onChange={this.getID}/>
                </Form.Field>

                <Link to={{pathname: '/customer', state: this.state.custid}}>
                <Button onClick={() => this.makeFetch(this.state)} > Login </Button>
                </Link>
>>>>>>> f90301a7c892297970d67504e5ba989be112cb52
                {/* <Form success>
                <Message success header='Form Completed' content="You're all signed up!" /> */}
                </Form> 
            </Grid.Row>
        </Grid>
        );
    };
}