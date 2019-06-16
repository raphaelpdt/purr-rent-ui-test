import React from 'react';
import {Button, Item, Icon, Label} from 'semantic-ui-react';
import {BrowserRouter, Link, NavLink} from 'react-router-dom'
//import Routes from './../Route'

const Posting = () => {
    return(
        <BrowserRouter>
        <Item.Group divided>
        <Item>
        <Item.Content>
                <Item.Header as='a'>Mike Hawk</Item.Header>
                <Item.Description>Is long and hard, in all seriousness, i think care package
                    deets can go here
                </Item.Description>
                <Item.Extra>
                    <Label>Scaly</Label>
                    <NavLink to='/new-rental'>            
                        <Button primary floated='left'>
                        Rent
                        <Icon name='right chevron' />
                    </Button>
                    </NavLink>
                    <Link to='/new-purrchase'>
                    <Button primary floated='left'>
                        Buy
                        <Icon name='right chevron' />
                    </Button>
                    </Link>
                </Item.Extra>
            </Item.Content>
        </Item>

        <Item>
        <Item.Content>
                <Item.Header as='a'>Daddy</Item.Header>
                <Item.Description>Wants a thirsty, furry little boy uwuwuwuwuwuwuwuwu</Item.Description>
                <Item.Extra>
                    <Label>Feathery uwu</Label>
                    <Button primary floated='left'>
                        Rent
                        <Icon name='right chevron' />
                    </Button>
                    <Button primary floated='left'>
                        Buy
                        <Icon name='right chevron' />
                    </Button>
                </Item.Extra>
            </Item.Content>
        </Item>

        <Item>
        <Item.Content>
                <Item.Header as='a'>BDSM</Item.Header>
                <Item.Description>I'm into BDSM; Beautiful Dogs Surrounding Me</Item.Description>
                <Item.Extra>
                    <Label>Furry</Label>
                    <Link to='/customer-rental'>
                    <Button primary floated='left'>
                        Rent
                        <Icon name='right chevron' />
                    </Button>
                    </Link>
                    <Button primary floated='left'>
                        Buy
                        <Icon name='right chevron' />
                    </Button>
                </Item.Extra>
            </Item.Content>
        </Item>
        </Item.Group>
        {/* <Routes/> */}
        </BrowserRouter>
    );
}

export default Posting;
