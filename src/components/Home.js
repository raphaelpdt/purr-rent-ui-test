import React from 'react';
import {Segment, Grid, Divider, Icon, Header, Button} from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css'

const Home = () => {
    return(
        <div>
            <Segment placeholder>
				<Grid columns={2} stackable textAlign='center'>
					<Divider vertical>Or</Divider>

					<Grid.Row verticalAlign='middle'>
						<Grid.Column>
							<Header icon>
								<Icon name='shop' />
							</Header>

							<Button primary> Customer </Button>
						</Grid.Column>

						<Grid.Column>
							<Header icon>
								<Icon name='world' />
							</Header>
							<Button primary>Purrent</Button>
						</Grid.Column>
					</Grid.Row>
				</Grid>
			</Segment>
        </div>
    );
};

export default Home;