import React from 'react';
import {Button, Item, Icon, Label} from 'semantic-ui-react';

const Posting = () => {
    return(
        <Item.Group divided>
        <Item>
        <Item.Content>
                <Item.Header as='a'>Mike Hawk</Item.Header>
                <Item.Description>Is long and hard, in all seriousness, i think care package
                    deets can go here
                </Item.Description>
                <Item.Extra>
                    <Label>Scaly</Label>
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
        </Item.Group>
    );
}

export default Posting;