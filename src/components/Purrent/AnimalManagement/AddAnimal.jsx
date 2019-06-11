import React, { Component } from 'react'
import { Button, Form, Grid, Checkbox, Header, Select } from 'semantic-ui-react';

const animalOptions = [
    {
        key: 'Furry',
        text: 'Furry',
        value: 'furry'
    },
    {
        key: 'Feathery',
        text: 'Feathery',
        value: 'feathery'
    },
    {
        key: 'Scaly',
        text: 'Scaly',
        value: 'scaly'
    }       
]

const dietOptions = [
    {
        key: 'vegan',
        text: 'Vegan',
        value: 'vegan'
    },
    {
        key: 'paleo',
        text: 'Paleo',
        value: 'paleo'
    },
    {
        key: 'meat',
        text: 'Meat Only',
        value: 'meat'
    },
    {
        key: 'glutenfree',
        text: 'Gluten-Free',
        value: 'glutenfree'
    },
    {
        key: 'vegetarian',
        text: 'Vegetarian',
        value: 'veg'
    }
]


export default class AddAnimal extends Component {
    render() {
        return (
    <Grid>
        <Grid.Row centered>
            <Header/>
            <Form>
                <Form.Field>
                    <label>Enter a 3 Digit AnimalID:</label>
                    <input placeholder='Animal ID' name='animalid'/>
                </Form.Field>
                <Form.Field>
                    <label>Type of Animal:</label>
                    <Select placeholder='Select type of animal' options={animalOptions}/>
                  </Form.Field>
                  <Form.Field>
                     <label> Diet:</label>
                     <Select placeholder='Select type of diet' options={dietOptions}/>
                  </Form.Field>
                  <Form.Field>
                       <label>Home Fungeon:</label>
                       <Select placeholder='Select Fungeon ID' options={null}/>
                   </Form.Field>
                   {/* <Form.Field>
                       <label>Clinic:</label>
                       <Select placeholder='autofill dependent on animal type' options={null}/>
                   </Form.Field>
                   <Form.Field>
                       <label>Care Package:</label>
                       <Select placeholder='autofill dependent on ......' options={null}/>
                   </Form.Field> */}
                   <Button color='orange'> Submit </Button>
            </Form>
        </Grid.Row>
    </Grid>
        );
    };
}