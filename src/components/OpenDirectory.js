import React from 'react'

import TextField from '@material-ui/core/TextField';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Search from '@material-ui/icons/Search';

class OpenDirectory extends React.Component {
	constructor(props) {
		super(props);
		
		this.state = {
			searchTerm: "",
			uri: `intext:"" intitle:"index.of" -inurl:(jsp|pl|php|html|aspx|htm|cf|shtml)`
		};

		this.handleChange = this.handleChange.bind(this);
	}

	handleChange(event) {
		this.setState({
			searchTerm: event.target.value,
			uri: `intext:"${event.target.value}" intitle:"index.of" -inurl:(jsp|pl|php|html|aspx|htm|cf|shtml)`
		});
	}

	render() {
		return (
			<div>
				<Card>
					<CardContent>
						<Typography className="Title" color="textPrimary" gutterBottom>
							Open Directory search tool {this.state.uri}
						</Typography>
						<form noValidate autoComplete="off">
							<div>
								<TextField
									value={this.state.searchTerm}
									onChange={this.handleChange}
									id="standard-basic"
									label="Enter search term"
									margin="normal"
								/>
							</div>
						</form>
						<a href={`https://www.google.com/search?q=${this.state.uri}`} target="_blank">
						<Button
              variant="contained"
							color="primary"
							startIcon={<Search />}
              style={{margin: "auto"}}
            >
              Find Directories!
            </Button>
						</a>
					</CardContent>
				</Card>
			</div>
		)
	}
}

export default OpenDirectory;