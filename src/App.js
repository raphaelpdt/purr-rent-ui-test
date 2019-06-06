import React, {Component} from 'react';
import {BrowserRouter, Route} from 'react-router-dom';

import Home from './components/Home';
import CustomerView from "./components/Customer/CustomerView";


class ui_test extends Component {
	render() {
		return(
			<BrowserRouter>
				<div>
					<h1 align="center">Pur-rentals, customer test</h1>
					<Route path="/" component={Home} exact />
					<Route path="/customer" component={CustomerView} />
					{/* <CustomerView />
					<Home /> */}
				</div>
			</BrowserRouter>
		);
	}
}

export default ui_test;
