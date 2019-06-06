import React, {Component} from 'react';
import {BrowserRouter, Route} from 'react-router-dom';

import Home from './components/Home';
import CustomerView from "./components/Customer/CustomerView";
import PurrentView from './components/Purrent/PurrentView';


class ui_test extends Component {
	render() {
		return(
			<BrowserRouter>
				<div>
					<Route path="/" component={Home} exact />
					<Route path="/customer" component={CustomerView} />
					<Route path="/purrent" component={PurrentView} />
				</div>
			</BrowserRouter>
		);
	}
}

export default ui_test;
