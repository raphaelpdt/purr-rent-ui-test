import React, {Component} from 'react';
import AccountCard from './AccountCard';
import {Link} from 'react-router-dom';
import { Grid, Item, Button, Label, Icon, Divider, } from 'semantic-ui-react';

class AccountGrid extends Component {
    state = {custid: this.props.custid}

    render() {
        return(
            <Grid columns={2} divided>
                <Grid.Row stretched>
                
                <Grid.Column>
                    <AccountCard custid = {this.state.custid} />

                    Current Purrks: None redeemed yet
                    <Link to='/customer-redeempurrks'>
                    <Button size='medium'>Redeem Purrks!</Button>
                    </Link>
                </Grid.Column>

                <Grid.Column>
                    <h2>Recent Transactions</h2>
                    <Item.Group divided>
                    <Item>
                    <Item.Content>
                            <Item.Header as='a'>Daddy</Item.Header>
                            <Item.Description>Wants a thirsty, furry little boy uwuwuwuwuwuwuwuwu</Item.Description>
                            <Item.Extra>
                                <Label>Feathery</Label>
                                <Label color='olive'><Icon name='dollar sign' />Purr-chased</Label>
                            </Item.Extra>
                        </Item.Content>
                    </Item>

                    <Item>
                    <Item.Content>
                            <Item.Header as='a'>BDSM</Item.Header>
                            <Item.Description>I'm into BDSM; Beautiful Dogs Surrounding Me</Item.Description>
                            <Item.Extra>
                                <Label>Furry</Label>
                                <Label color='blue'><Icon name='favorite'/>Rental</Label>
                                <Link to='/customer-update'>
                                    <Divider/>
                                    <Button color='teal'>Update Info</Button>
                                </Link>
                                <Link to='/customer-invoices'>
                                    <Button color='green'>View Invoices</Button>
                                </Link>
                            </Item.Extra>
                        </Item.Content>
                    </Item>
                    </Item.Group>
                </Grid.Column>
                </Grid.Row>
            </Grid>
        );
    }
}

export default AccountGrid;