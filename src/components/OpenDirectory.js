import React from 'react'

import TextField from '@material-ui/core/TextField';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Typography from '@material-ui/core/Typography';
import FormControl from '@material-ui/core/FormControl'
import Button from '@material-ui/core/Button';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import Search from '@material-ui/icons/Search';

class OpenDirectory extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			searchTerm: "",
			uri: `intext:"" intitle:"index.of" -inurl:(jsp|pl|php|html|aspx|htm|cf|shtml)`,
			filter: "Everything"
		};

		this.handleChange = this.handleChange.bind(this);
		this.handleCheck = this.handleCheck.bind(this);
	}

	updateURI() {
		this.setState({ uri: `intext:"${this.state.searchTerm.trim()}" intitle:"index.of" -inurl:(jsp|pl|php|html|aspx|htm|cf|shtml)` })
	}

	handleCheck(event) {
		this.setState({ filter: event.target.value });
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
							<FormControl component="fieldset" name="filter">
								<RadioGroup aria-label="position" onChange={this.handleCheck} value={this.state.filter} row>
									<FormControlLabel
										value="Everything"
										control={<Radio color="primary" />}
										label="Everything"
										labelPlacement="start"
									/>

									<FormControlLabel
										value="Audio"
										control={<Radio color="primary" />}
										label="Audio"
										labelPlacement="start"
									/>

									<FormControlLabel
										value="Video"
										control={<Radio color="primary" />}
										label="Video"
										labelPlacement="start"
									/>
								</RadioGroup>
							</FormControl>
						</form>

						<a href={`https://www.google.com/search?q=${this.state.uri}`}
							target="_blank"
							rel="noopener noreferrer"
						>
							<Button
								variant="contained"
								color="primary"
								startIcon={<Search />}
								style={{ margin: "auto" }}
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