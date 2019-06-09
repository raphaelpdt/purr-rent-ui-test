import React, {Component} from 'react';
import {BrowserRouter, Route} from 'react-router-dom';

import Home from './components/Home';
import CustomerView from "./components/Customer/CustomerView";
import PurrentView from './components/Purrent/PurrentView';
import NewRental from './components/Customer/Transaction/NewRental';
import Login from './components/Login';
import NewPurchase from './components/Customer/Transaction/NewPurchase';
import viewInvoices from './components/Customer/Transaction/viewInvoices';
import CustUpdate from './components/Customer/AccManagement/CustUpdate';
import CustSignUp from './components/Customer/AccManagement/CustSignUp';


class ui_test extends Component {
	render() {
		return(
			<BrowserRouter>
				<div>
					<Route path="/" component={Home} exact />
					<Route path="/customer" component={CustomerView} exact />
					<Route path="/customer-signup" component={CustSignUp}/>
					<Route path="/customer-rental" component={NewRental}/>
					<Route path='/customer-invoices' component={viewInvoices}/>
					<Route path='/customer-update' component={CustUpdate} />
					<Route path="/purrent" component={PurrentView} />
					<Route path='/login' component={Login} />
					<Route path='/new-rental' component={NewRental} />
					<Route path='/new-purrchase' component={NewPurchase} />
				</div>
			</BrowserRouter>
		);
	}
}

export default ui_test;
