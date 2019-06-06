import React from 'react';
import Posting from '../Posting';
import AccountGrid from '../AccountGrid';

import { Tab, Button } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';

const panes = [
    {
        menuItem: 'Manage Animals',
        pane: {
            key: 'modAnimals',
            content: ( 
            <div>
                <Posting />
                <Button.Group attached='bottom'>
                    <Button>Add</Button>
                    <Button>Remove</Button>
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
                    <Button>Add</Button>
                    <Button>Remove</Button>
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
                    <Button>Add</Button>
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
	return(<Tab 
    menu={{fluid: true, vertical: true, tabular: true}} 
    panes={panes}
    renderActiveOnly={false}/>);
}

export default PurrentView;