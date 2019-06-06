import React, {Component} from 'react';
import {Card, Grid, Item, Image, Button, Label, Icon} from 'semantic-ui-react';

class AccountGrid extends Component {
    render() {
        return(
            <Grid columns={2} divided>
                <Grid.Row stretched>
                
                <Grid.Column>
                    <Card>
                    <Image src='http://dcsir.org/wp-content/uploads/2017/12/Screen-Shot-2017-12-16-at-7.43.20.png' wrapped ui={false} />
                        <Card.Content>
                        <Card.Header>Good Boi</Card.Header>
                        <Card.Meta>
                            <span>Purrfect Member since 2019</span>
                        </Card.Meta>
                        </Card.Content>
                        <Card.Content extra>
                            69 Points
                        </Card.Content>
                    </Card>

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