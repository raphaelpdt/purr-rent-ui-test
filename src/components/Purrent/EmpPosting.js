import React from 'react';
import {Button, Item, Icon, Label } from 'semantic-ui-react';
import { NavLink } from 'react-router-dom'
//import Routes from './../Route'

const EmpPosting = () => {
   
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
                    {/* the button/routing doesnt work on this */}
                    <NavLink to='/update-animal'>            
                        <Button primary floated='left'>
                        Update
                        <Icon name='right chevron' />
                        </Button>
                    </NavLink>
                        <Button primary floated='left'>
                            Remove
                            <Icon name='right chevron' />
                        </Button>
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
                        Update
                        <Icon name='right chevron' />
                    </Button>
                    <Button primary floated='left'>
                        Remove
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
                    <Button primary floated='left'>
                        Update
                        <Icon name='right chevron' />
                    </Button>
                    <Button primary floated='left'>
                        Remove
                        <Icon name='right chevron' />
                    </Button>
                </Item.Extra>
            </Item.Content>
        </Item>
        </Item.Group>
        {/* <Routes/> */}
        </div>
    );
}

export default EmpPosting;
