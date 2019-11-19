import React from 'react'

import TextField from '@material-ui/core/TextField';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Typography from '@material-ui/core/Typography';
import FormControl from '@material-ui/core/FormControl'
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import Search from '@material-ui/icons/Search';

const fileFilters = {
	Everything: "",
	Videos: "(wmv|mpg|avi|mp4|mkv|mov)",
	Audio: "(ac3|flac|m4a|mp3|ogg|wav|wma)",
	Images: "(bmp|gif|jpg|jpeg|png|psd|tif|tiff|svg)",
	Archives: "(rar|tar|7z|zip|si)",
	Torrents: "(torrent)",
	Office: "(xls|xlsx|ppt|pptx|doc|docx|odp|ods|odt|rtf)"
}

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
		var fileFilter = fileFilters[this.state.filter]
		this.setState({ uri: `intext:"${this.state.searchTerm.trim()}" intitle:"index.of" ${fileFilter} -inurl:(jsp|pl|php|html|aspx|htm|cf|shtml)` })
	}

	handleCheck(event) {
		this.setState({ filter: event.target.value }, () => {
			this.updateURI();
		});
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
							<Grid item xs={6} sm={6}>
								<Typography 
										gutterBottom
										className="Title"
										color="textPrimary"
										variant="body1"
										>
									Open directory search tool
								</Typography>
							</Grid>
							<Grid item xs={6} sm={6}>
								<TextField
									name="searchTerm"
									value={this.state.searchTerm}
									onChange={this.handleChange}
									id="standard-basic"
									label="Search term"
									margin="normal"
								/>
							</Grid>
						</Grid>
						<FormControl component="fieldset" name="filter">
							<RadioGroup style={{ justifyContent: 'center' }} aria-label="position" onChange={this.handleCheck} value={this.state.filter} row>
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
									value="Images"
									control={<Radio color="primary" />}
									label="Images"
									labelPlacement="start"
								/>
								<FormControlLabel
									value="Videos"
									control={<Radio color="primary" />}
									label="Videos"
									labelPlacement="start"
								/>
								<FormControlLabel
									value="Torrents"
									control={<Radio color="primary" />}
									label="Torrents"
									labelPlacement="start"
								/>
								<FormControlLabel
									value="Archives"
									control={<Radio color="primary" />}
									label="Archives"
									labelPlacement="start"
								/>
								<FormControlLabel
									value="Office"
									control={<Radio color="primary" />}
									label="Office"
									labelPlacement="start"
								/>
							</RadioGroup>
						</FormControl>

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