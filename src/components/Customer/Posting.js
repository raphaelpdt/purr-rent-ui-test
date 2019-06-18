import React, {Component} from 'react';
import {Button, Item, Label, Icon} from 'semantic-ui-react';
import { Link, NavLink} from 'react-router-dom'
//import Routes from './../Route'

class Posting extends Component {
    state = {custid: this.props.custid}

    render() {
    return(
        <div>
        <Item.Group divided>
        <Item>
        <Item.Content>
                <Item.Header as='a'>Mike Hawk</Item.Header>
                <Item.Description>Is long and hard, in all seriousness, i think care package
                    deets can go here
                </Item.Description>
                <Item.Extra>
                    <Label>Scaly</Label>
                        <NavLink to={{pathname: '/new-rental', state: this.state.custid}}>            
                            <Button primary floated='left'> Rent <Icon name='right chevron' /></Button>
                        </NavLink>
                            <NavLink to={{ pathname: '/new-purrchase', state: this.state.custid }}>
                            <Button primary floated='left'> Buy <Icon name='right chevron' /></Button>
                        </NavLink>
                </Item.Extra>
            </Item.Content>
        </Item>

        <Item>
        <Item.Content>
                <Item.Header as='a'>Daddy</Item.Header>
                <Item.Description>Wants a thirsty, furry little boy uwuwuwuwuwuwuwuwu</Item.Description>
                <Item.Extra>
                    <Label>Feathery uwu</Label>
                    <Button primary floated='left'> Rent </Button>
                    <Button primary floated='left'> Buy </Button>
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
                    </Button>
                    </Link>
                    <Button primary floated='left'>
                        Buy
                    </Button>
                </Item.Extra>
            </Item.Content>
        </Item>
        </Item.Group>
        {/* <Routes/> */}
        </div>
        );
    }
}
export default Posting;