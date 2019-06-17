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

    render() {
        return(
            <Grid columns={3} divided>
                <Grid.Row stretched>

                    <Grid.Column>
                        <h3>Best Boi</h3>
                        <StatsCard />

                       <h3>Needs to be bought more Boi</h3>
                       <StatsCard />
                    </Grid.Column>

                    <Grid.Column>
                        <h3>Upcoming Due Dates</h3>
                        <Card.Group>
                            <StatsCard />
                            <StatsCard />
                            <StatsCard />
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
                        <StatsCard />

                        <h3>Highest Sales Fungeon</h3>
                        <StatsCard />
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        );
    };
}

export default Statistics;