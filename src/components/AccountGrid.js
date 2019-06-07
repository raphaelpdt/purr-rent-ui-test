import React, {Component} from 'react';
import AccountCard from './AccountCard';
import { Grid, Item, Button, Label, Icon} from 'semantic-ui-react';

class AccountGrid extends Component {
    render() {
        return(
            <Grid columns={2} divided>
                <Grid.Row stretched>
                
                <Grid.Column>
                    <AccountCard />

                    Current Purrks: None redeemed yet
                    <Button size='medium'>Redeem Purrks!</Button>
                </Grid.Column>

                <Grid.Column>
                    <h2>Transactions</h2>
                    <Item.Group divided>
                    <Item>
                    <Item.Content>
                            <Item.Header as='a'>Daddy</Item.Header>
                            <Item.Description>Wants a thirsty, furry little boy uwuwuwuwuwuwuwuwu</Item.Description>
                            <Item.Extra>
                                <Label>Feathery</Label>
                                <Label color='olive green'><Icon name='dollar sign' />Purr-chased</Label>
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