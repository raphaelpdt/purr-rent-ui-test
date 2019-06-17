import React, {Component} from 'react';
import {Card, Icon} from 'semantic-ui-react';

class StatsCard extends Component {
    render() {
        return(
            <Card color='red'>
                <Card.Content header='Animal Name' />
                <Card.Content>
                    <Card.Meta><span>Animal Type</span></Card.Meta>
                    <Card.Meta><span>From what fungeon</span></Card.Meta>
                </Card.Content>
                <Card.Content extra>
                    <Icon name='user' />
                    69 rentals
                </Card.Content>
            </Card>
        );
    };
}

export default StatsCard;