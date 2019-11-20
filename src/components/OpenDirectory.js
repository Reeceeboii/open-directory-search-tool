import React from 'react'

import TextField from '@material-ui/core/TextField';
import Card from '@material-ui/core/Card';
import Paper from '@material-ui/core/Paper';
import { styled } from '@material-ui/core/styles';
import CardContent from '@material-ui/core/CardContent';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Typography from '@material-ui/core/Typography';
import FormControl from '@material-ui/core/FormControl'
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import Search from '@material-ui/icons/Search';

const StyledCard = styled(Card)({
	background: '#F0F0F0'
});

const StyledPaper = styled(Paper)({
  background: '#D0D0D0'
});

const fileFilters = {
	Anything: "",
	Videos: "(wmv|mpg|avi|mp4|mkv|mov)",
	Audio: "(ac3|flac|m4a|mp3|ogg|wav|wma)",
	Images: "(bmp|gif|jpg|jpeg|png|psd|tif|tiff|svg)",
	Archives: "(rar|tar|7z|zip|si)",
	Torrents: "(torrent)",
	Office: "(xls|xlsx|ppt|pptx|doc|docx|odp|ods|odt|rtf)"
}

const directoryTypes = ["Anything", "Audio", "Images", "Videos", "Torrents", "Archives", "Office"];

class OpenDirectory extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			searchTerm: "",
			uri: `intext:"" intitle:"index.of" -inurl:(jsp|pl|php|html|aspx|htm|cf|shtml)`,
			filter: "Anything"
		};

		this.handleChange = this.handleChange.bind(this);
		this.handleCheck = this.handleCheck.bind(this);
	}

	// inject corresponding state elems into URI at correct positions
	updateURI() {
		var fileFilter = fileFilters[this.state.filter]
		this.setState({ uri: `intext:"${this.state.searchTerm.trim()}" intitle:"index.of" ${fileFilter} -inurl:(jsp|pl|php|html|aspx|htm|cf|shtml)` })
	}

	// keeps track of which radio buttons are currently pressed
	handleCheck(event) {
		this.setState({ filter: event.target.value }, () => {
			this.updateURI();
		});
	}

	// updates state's URI when the textfield's content changes
	handleChange(event) {
		this.setState({ [event.target.name]: event.target.value }, () => {
			this.updateURI();
		});
	}

	render() {
		let searchButton = (this.state.searchTerm.trim().length > 0) ? 
		<a 	href={`https://www.google.com/search?q=${this.state.uri}`}
		   	target="_blank"
			rel="noopener noreferrer"
			>
			<Button
				variant="contained"
				color="secondary"
				startIcon={<Search />}
				style={{ margin: "auto" }}
			>
				Find Directories
			</Button>
		</a> : 
		<Button
			disabled
			startIcon={<Search />}
			style={{ margin: "auto" }}
		>
			Find Directories
		</Button>;

		return (
			<div>
				<StyledCard>
					<CardContent>
						<Grid style={{alignItems: 'center'}} container spacing={3}>
							<Grid item xs={12} sm={6}>
								<Typography 
										gutterBottom
										className="Title"
										color="textPrimary"
										variant="body1"
										>
									Open directory search tool
								</Typography>
							</Grid>
							<Grid item xs={12} sm={6}>
								<TextField
									name="searchTerm"
									value={this.state.searchTerm}
									onChange={this.handleChange}
									id="standard-basic"
									label="Search term"
									margin="normal"
									color="secondary"
								/>
							</Grid>
						</Grid>
						<Grid style={{alignItems: 'center'}} container spacing={1}>

							<FormControl component="fieldset" name="filter">
								<RadioGroup style={{ justifyContent: 'center' }} 
											aria-label="position" 
											onChange={this.handleCheck} 
											value={this.state.filter} row
								>
									
									{
									// map button types as radio buttons into RadioGroup
									directoryTypes.map( type => (
										<Grid item xs={6} sm={3}>
												<FormControlLabel 
													key={ type }
													value={ type }
													control={ <Radio color="secondary" /> }
													label={ type }
													labelPlacement="start"
												/>
											</Grid>
										))
									}
								</RadioGroup>
							</FormControl>
						</Grid>

						<Grid style={{alignItems: 'center'}} container spacing={3}>
							<Grid item xs={12} sm={12}>
								<StyledPaper>
									<Typography paragraph variant="h6">
										You are filtering down to...
									</Typography>
									<Typography
										paragraph
										color="textPrimary"
										variant="body1"
									>
										<code>{this.state.filter}</code>
									</Typography>
									<Typography paragraph variant="h6">
										Using the search term...
									</Typography>
									<Typography
										paragraph
										color="textPrimary"
										variant="body1"
									>
										<code>{(this.state.searchTerm.trim().length > 0) ? this.state.searchTerm : "(Please enter a search term)"}</code>
									</Typography>
									<Typography paragraph variant="h6">
										Your advanced search query is...
									</Typography>
									<Typography
										paragraph
										color="textPrimary"
										variant="body1"
									>
										<code>{this.state.uri}</code>
									</Typography>
								</StyledPaper>
							</Grid>
							<Grid item xs={12} sm={12}>
								{searchButton}
							</Grid>
						</Grid>
					</CardContent>
				</StyledCard>
			</div>
		)
	}
}

export default OpenDirectory;