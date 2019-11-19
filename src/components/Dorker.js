import React from 'react'
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';


const searchEngines = {
	google: "www.google.com",
	bing: "www.bing.com"
}

class Dorker extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			searchTerm: "",
			site: ""
		};

		this.handleChange = this.handleChange.bind(this);
	}

	updateURI() {
		console.log(this.state.searchTerm);
	}

	handleChange(event) {
		this.setState({ [event.target.name]: event.target.value }, () => {
			this.updateURI();
		});
	}

	render() {
		return (
			<div>
				<Card>
					<CardContent>
						<Grid container spacing={3}>
							<Grid item xs={12} sm={6}>
								<Container maxWidth="sm" className="CenteredContainer">
									<Typography
										gutterBottom
										className="Title"
										color="textPrimary"
										variant="body1"
									>
										Search engine dorker
								</Typography>
							</Container>
							</Grid>
							<Grid item xs={12} sm={6}>
								<TextField
									name="searchTerm"
									value={this.state.searchTerm}
									onChange={this.handleChange}
									id="standard-basic"
									label="Search term"
									margin="normal"
								/>
							</Grid>
							<Grid item xs={12} sm={6}>
								<TextField
									name="searchTerm"
									value={this.state.site}
									onChange={this.handleChange}
									id="standard-basic"
									label="Site"
									margin="normal"
								/>
							</Grid>
						</Grid>
					</CardContent>
				</Card>
			</div>
		);
	}
}

export default Dorker;