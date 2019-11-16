import React from 'react'

import TextField from '@material-ui/core/TextField';
import Card from '@material-ui/core/Card';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Checkbox from '@material-ui/core/Checkbox';
import Search from '@material-ui/icons/Search';
import { Container } from '@material-ui/core';

const filters = [
	{ name: 'everything', checked: true },
	{ name: 'audio', checked: false },
	{ name: 'video', checked: false }
]

class OpenDirectory extends React.Component {
	constructor(props) {
		super(props);
		
		this.state = {
			searchTerm: "",
			uri: `intext:"" intitle:"index.of" -inurl:(jsp|pl|php|html|aspx|htm|cf|shtml)`,
			everything: true, 
			audio: false,
			video: false			
		};

		this.handleChange = this.handleChange.bind(this);
		this.handleCheck = this.handleCheck.bind(this);
	}

	updateURI() {
		this.setState({ uri: `intext:"${this.state.searchTerm}" intitle:"index.of" -inurl:(jsp|pl|php|html|aspx|htm|cf|shtml)`})
	}

	handleCheck(event) {
		filters.forEach(filter => {
			if(filter.name === event.target.name) {
				filter.checked = event.target.checked;
			} else {
				filter.checked = false;
			}
			this.setState({ [event.target.name] : filter.checked })
		})
		
		filters.forEach(filter => {
			console.log(`${filter.name} | ${filter.checked}`)
			this.setState({ [filter.name] : [filter.checked] })
		})

		//this.setState({ [event.target.name] : event.target.checked });
	}

	handleChange(event) {
		this.setState({ [event.target.name] : event.target.value }, () => {
			this.updateURI();
		});
	}

	render() {
		return (
			<div>
				<Card>
					<CardContent>
						<Typography className="Title" color="textPrimary" gutterBottom>
							Open directory search tool
						</Typography>
						<form noValidate autoComplete="off">
							<div>
								<TextField
									name="searchTerm"
									value={this.state.searchTerm}
									onChange={this.handleChange}
									id="standard-basic"
									label="Enter search term"
									margin="normal"
								/>
							</div>
								<FormGroup aria-label="position" row>
									<Container maxWidth="sm" className="CenteredContainer">
										<FormControlLabel
											name="audio"
											value={this.state.audio}
											onChange={this.handleCheck}
											control={<Checkbox color="primary" />}
											label="Audio"
											labelPlacement="start"
										/>
										<FormControlLabel
											name="video"
											value={this.state.video}
											onChange={this.handleCheck}
											control={<Checkbox color="primary" />}
											label="Video"
											labelPlacement="start"
										/>
									</Container>
								</FormGroup>
						</form>
						<a href={`https://www.google.com/search?q=${this.state.uri}`} 
						target="_blank"
						rel="noopener noreferrer"
						>
						<Button
              				variant="contained"
							color="primary"
							startIcon={<Search />}
              				style={{margin: "auto"}}
            			>
						Find Directories
            			</Button>
						</a>
					</CardContent>
				</Card>
			</div>
		)
	}
}

export default OpenDirectory;