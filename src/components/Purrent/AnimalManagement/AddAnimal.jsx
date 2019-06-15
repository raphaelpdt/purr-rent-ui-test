import React, { Component } from 'react'
import { Button, Form, Grid, Checkbox, Header, Select, Dropdown } from 'semantic-ui-react';
import { nullableTypeAnnotation } from '@babel/types';

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

const blidOptions = [
    { key: 69, value: 69, text: 69 },
    { key: 70, value: 70, text: 70 },
    { key: 71, value: 71, text: 71 },
    { key: 72, value: 72, text: 72 },
    { key: 73, value: 73, text: 73 },
]


export default class AddAnimal extends Component {
    state = {
        animalid: null,
        animaltype: null,
        diet: null,
        blid: null,
        clinid: null,
        packageid: null,


        
    }

    tempState = {
        animalid: null,
        animaltype: null,
        diet: null
        
    }

    handleTextChange = e => {
        // console.log(e.target.value)
        // console.log(e.target.name)
        this.setState({[e.target.name]: e.target.value}, 
            console.log(this.state))      
    }
    handleDropdownChange = (e, data) => {
        // console.log('dd: ' + value)
        // console.log(data)
        // console.log(data.value)
        this.setState({[data.name] : data.value }, console.log(this.state))

    }

    render() {
        const {
            value
        } = this.state

        return (
    <Grid>
        <Grid.Row centered>
            <Header/>
            <Form>
                <Form.Field>
                    <label htmlFor='animalid'>Enter a 3 Digit AnimalID:</label>
                    <input 
                        type='text' 
                        placeholder='Animal ID' 
                        name='animalid' 
                        onChange={this.handleTextChange}/>
                </Form.Field>
                <Form.Field>
                    <label htmlFor='animaltype'>Type of Animal:</label>
                    <Dropdown 
                        type='text' 
                        placeholder='Select type of animal'
                        name='animaltype'
                        options={animalOptions}
                        onChange={this.handleDropdownChange}
                        />
                  </Form.Field>
                  <Form.Field>
                     <label htmlFor='diet'> Diet:</label>
                     <Dropdown 
                        type='string' 
                        placeholder='Select type of diet' 
                        options={dietOptions} 
                        name='diet'
                        onChange={this.handleDropdownChange}/>
                  </Form.Field>
                    <Form.Field>
                        <label>Home Fungeon: (options should be queried from db)</label>
                        <Dropdown 
                            placeholder='Select a fungeon location' 
                            options={blidOptions} 
                            name='blid'
                            onChange={this.handleDropdownChange}/>
                    </Form.Field>
                   <Form.Field>
                       <label>Clinic: (options should be queried from db)</label>
                       <Dropdown placeholder='Select a clinic' options={null} name='clinid'/>
                   </Form.Field>
                   <Form.Field>
                       <label>Care Package: (options should be queried from db)</label>
                       <Dropdown placeholder='Select a care package' options={null} name='packageid'/>
                   </Form.Field>
                   <Button color='orange' onClick={this.setState(value, console.log(this.state))}> Submit </Button>
            </Form>
        </Grid.Row>
    </Grid>
        );
    };

}