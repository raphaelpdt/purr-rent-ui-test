import React from 'react'
import { Form, Grid, FormField } from 'semantic-ui-react';

const NewRental = () => (
    <Grid>
        <Grid.Row centered>
            <Form>
                <FormField>
                    <label>CustID:</label>
                    <input placeholder='CustID' name='custid'/>
                </FormField>
            </Form>
        </Grid.Row>
    </Grid>
);
export default NewRental;
