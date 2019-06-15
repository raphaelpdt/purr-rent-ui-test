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
import RedeemPurks from './components/Customer/Transaction/RedeemPurrks';
import EmpLogin from './components/Purrent/EmpLogin';
import AddAnimal from './components/Purrent/AnimalManagement/AddAnimal';
import UpdateAnimal from './components/Purrent/AnimalManagement/UpdateAnimal';
import AddEmp from './components/Purrent/EmpManagement/AddEmp';


class ui_test extends Component {
	render() {
		return(
			<BrowserRouter>
				<div>
					<Route path="/" component={Home} exact />
					<Route path="/customer" component={CustomerView} exact />					
					<Route path='/customer-login' component={Login} />
					<Route path="/customer-signup" component={CustSignUp}/>
					<Route path="/customer-rental" component={NewRental}/>
					<Route path='/customer-invoices' component={viewInvoices}/>
					<Route path='/customer-update' component={CustUpdate} />
					<Route path='/customer-redeempurrks' component={RedeemPurks}/>


					<Route path="/purrent" component={PurrentView} exact />
					<Route path='/purrent-login' component={EmpLogin} />

					<Route path='/new-purrent' component={AddEmp}/>

					<Route path='/new-animal' component={AddAnimal}/>
					<Route path='/update-animal' component={UpdateAnimal}/>

					<Route path='/new-rental' component={NewRental} />
					<Route path='/new-purrchase' component={NewPurchase} />
				</div>
			</BrowserRouter>
		);
	}
}

export default ui_test;
