import React from 'react';
import EmpPosting from './EmpPosting';
import AccountGrid from '../AccountGrid';
import { NavLink, Link } from 'react-router-dom';

import { Tab, Button } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';

const panes = [
    {
        menuItem: 'Manage Animals',
        pane: {
            key: 'modAnimals',
            content: (
                <div>
                    <EmpPosting />
                    <Button.Group attached='bottom'>
                        <Link to='/new-animal'>
                            <Button color='pink'>Add New Animal</Button>
                        </Link>
                    </Button.Group>
                </div>
            ),
        },
    },
    {
        menuItem: 'Manage Customers',
        pane: {
            key: 'modCustomers',
            content: (
                <div><Button.Group attached='bottom'>
                    <NavLink to='/customer-signup'>
                        <Button fluid>Add</Button>
                    </NavLink>
                    <NavLink to='/customer-signup'>
                        <Button fluid>Remove</Button>
                    </NavLink>
                </Button.Group>
                </div>
            ),
        },
    },
    {
        menuItem: 'Manage Employees',
        pane: {
            key: 'modEmployee',
            content: (
                <div><Button.Group basic attached='bottom'>
                    <Link to='/new-purrent'>
                        <Button>Add</Button>
                    </Link>
                    <Button>Remove</Button>

                </Button.Group>
                </div>
            ),
        },
    },
    {
        menuItem: 'Manage Transactions',
        pane: {
            key: 'modEmployee',
            content: (
                <div>
                    <Button.Group basic attached='bottom'>
                        <Button>Add</Button>
                        <Button>Remove</Button>
                    </Button.Group>
                </div>
            ),
        },
    },
    {
        menuItem: 'My Account',
        pane: {
            key: 'account',
            content: (
                <div><AccountGrid /></div>
            ),
        },
    },
]

const PurrentView = () => {
    return (<Tab
        menu={{ fluid: true, vertical: true, tabular: true }}
        panes={panes}
        renderActiveOnly={false} />);
}

export default PurrentView;