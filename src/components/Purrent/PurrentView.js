import React from 'react';
import AccountGrid from '../AccountGrid';
import { NavLink } from 'react-router-dom';

import { Tab, Button } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';
import TTransManagement from './HomeTabs/TTransManagement'
import TAnimalManagement from './HomeTabs/TAnimalManagement';
import TEmpManagement from './HomeTabs/TEmpManagement';
import TCustManagement from './HomeTabs/TCustManagement';

const panes = [
    {
        menuItem: 'Manage Animals',
        pane: {
            key: 'modAnimals',
            content: (
                <TAnimalManagement />
            ),
        },
    },
    {
        menuItem: 'Manage Customers',
        pane: {
            key: 'modCustomers',
            content: (
                <TCustManagement/>
            ),
        },
    },
    {
        menuItem: 'Manage Employees',
        pane: {
            key: 'modEmployee',
            content: (
                <TEmpManagement />
            ),
        },
    },
    {
        menuItem: 'Manage Transactions',
        pane: {
            key: 'modEmployee',
            content: (
                <TTransManagement />
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