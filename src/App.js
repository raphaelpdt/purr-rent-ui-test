import React, {Component} from 'react';
import {BrowserRouter, Route} from 'react-router-dom';

import Home from './components/Home';
import CustomerView from "./components/Customer/CustomerView";
import PurrentView from './components/Purrent/PurrentView';
import CustSignUp from './components/Customer/CustSignUp';
import NewRental from './components/Customer/Transaction/newRental';
import Login from './components/Login';


class ui_test extends Component {
	render() {
		return(
			<BrowserRouter>
				<div>
					<Route path="/" component={Home} exact />
					<Route path="/customer" component={CustomerView} exact />
					<Route path="/customer-signup" component={CustSignUp}/>
					<Route path="/customer-rental" component={NewRental}/>
					<Route path="/purrent" component={PurrentView} />
					<Route path='/login' component={Login} />
					<Route path='/new-rental' component={NewRental} />
				</div>
			</BrowserRouter>
		);
	}
}

export default ui_test;
