import React from 'react';
import Posting from './Posting';
import AccountGrid from './AccountGrid';
import { Tab } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';

const panes = [
	{
    menuItem: 'Animals',
        pane: {
            key: 'animals',
            content: ( 
            <div><Posting /></div>
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

const Sidebar = () => {
	return(<Tab 
    menu={{fluid: true, vertical: true, tabular: true}} 
    panes={panes} 
    renderActiveOnly={false}/>);
}

export default Sidebar;