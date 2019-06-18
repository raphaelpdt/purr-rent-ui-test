import React, { Component } from 'react';
import EmpAccount from './EmpAccount';

import { Tab } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';
import TTransManagement from './HomeTabs/TTransManagement'
import TAnimalManagement from './HomeTabs/TAnimalManagement';
import TEmpManagement from './HomeTabs/TEmpManagement';
import TCustManagement from './HomeTabs/TCustManagement';
import Statistics from '../Statistics';

class PurrentView extends Component {
    state = {empid: this.props.location.state}

    render() {
        return (<Tab
            menu={{ fluid: true, vertical: true, tabular: true }}
            panes={[
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
                            <TCustManagement />
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
                            <div><EmpAccount empid={this.state.empid}/></div>
                        ),
                    },
                },
                {
                    menuItem: 'Statistics',
                    pane: {
                        key: 'stats',
                        content: (
                            <div><Statistics /></div>
                        ),
                    },
                },
            ]}
            renderActiveOnly={false} />);
    }
}

export default PurrentView;