import React, {Component} from 'react';
import StatsCard from "./StatsCard";
import { Grid, Card, Segment, Header, Icon } from 'semantic-ui-react';

class Statistics extends Component {

    state = {
        // Best Boi
        BestSellerName: undefined,
        BestSellerType: undefined,
        BestSellerFungeon: undefined,

        // Worst Boi
        WorstSellerName: undefined,
        WorstSellerType: undefined,
        WorstSellerFungeon: undefined,

        // Due Dates
        DueDates: [],

        // Customer w most transactions
        BestBuyName: undefined,
        BestBuy_Points: undefined,
        BestBuy_Trans_Count: undefined,

        // Fungeon w most transactions
        Bestgeon_Name: undefined,
        Bestgeon_Type: undefined,
        Bestgeon_Fungeon: undefined
    }

    // Multiple fetch calls to get pertinent data
    // fetch best boi

    // fetch least bought animal

    // fetch YTD sales

    // fetch all curr due dates
    // create fn to map due dates to card group

    // fetch cust w highest transactions

    // fetch Fungeon w most transactions/revenue

    // Create card for summary view
    createCard = (name, attr1, attr2, attr3) => {
        let card = (
        <Card color='red'>
            <Card.Content header={name} />
            <Card.Content>
                <Card.Meta><span>{attr1}</span></Card.Meta>
                <Card.Meta><span>{attr2}</span></Card.Meta>
            </Card.Content>
            <Card.Content extra>
                <Icon name='user' />
                {attr3}
                </Card.Content>
        </Card>)

        return card;
    }

    render() {
        return(
            <Grid columns={3} divided>
                <Grid.Row stretched>

                    <Grid.Column>
                        <h3>Best Boi</h3>
                        {this.createCard('Piece of Shit', 'Furry', 'Sux cock', '69 rentals')}

                       <h3>Needs to be bought more Boi</h3>
                        {this.createCard('Mike Litoris', 'Feathery', 'Moist', '69 pounds')}
                    </Grid.Column>

                    <Grid.Column>
                        <h3>Upcoming Due Dates</h3>
                        <Card.Group>
                            {this.createCard('Ho Li Fuk', 'From Fungeon x', 'Due by', 'Rented by')}
                            {this.createCard('Kyons Dildo', 'From fungeon y', 'Due by', 'Who rented me')}
                            {this.createCard('Gag Ball', 'From my sex dungeon', 'Due by', 'Who rented this shit')}
                        </Card.Group>   
                    </Grid.Column>

                    <Grid.Column>
                        <div>
                        <Segment circular inverted color='olive' style={{width: 175, height: 175}}>
                            <Header as='h2' inverted>
                                YTD Sales
                                <Header.Subheader>$100000</Header.Subheader>
                            </Header>
                        </Segment>
                        </div>

                        <h3>Greatest Sale</h3>
                        {this.createCard('Gaylord Focker', 'Amt of sale', 'Fungeon', 'idk what to put here')}

                        <h3>Highest Sales Fungeon</h3>
                        {this.createCard('Sum Ting Wong', 'From Fungeon x', 'Due by', 'Rented by')}
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        );
    };
}

export default Statistics;