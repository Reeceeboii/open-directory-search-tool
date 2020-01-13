import React from 'react'
import TextField from '@material-ui/core/TextField'
import Paper from '@material-ui/core/Paper'
import { styled } from '@material-ui/core/styles'
import CardContent from '@material-ui/core/CardContent'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import Typography from '@material-ui/core/Typography'
import FormControl from '@material-ui/core/FormControl'
import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button'
import Checkbox from '@material-ui/core/Checkbox'
import Tooltip from '@material-ui/core/Tooltip'
import Radio from '@material-ui/core/Radio'
import RadioGroup from '@material-ui/core/RadioGroup'
import Search from '@material-ui/icons/Search'
import StyledCard from '../components/StyledCard'

const StyledPaper = styled(Paper)({
  background: '#BCC3D1'
})

const fileFilters = {
  Anything: '',
  Videos: '(wmv|mpg|avi|mp4|mkv|mov)',
  Audio: '(ac3|flac|m4a|mp3|ogg|wav|wma)',
  Images: '(bmp|gif|jpg|jpeg|png|psd|tif|tiff|svg)',
  Archives: '(rar|tar|7z|zip|si)',
  Torrents: '(torrent)',
  Office: '(xls|xlsx|ppt|pptx|doc|docx|odp|ods|odt|rtf)',
  eBooks: '(rzb|tpz|apnx|lrs|mart|tk3|mobi|azw3|kfx|ncx|ibooks|lrf|pdf)'
}

const directoryTypes = ['Anything', 'Audio', 'Images', 'Videos',
  'Torrents', 'Archives', 'Office', 'eBooks']

class OpenDirectory extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      searchTerm: '',
      uri: 'intext:"" intitle:"index.of" -inurl:(jsp|pl|php|html|aspx|htm|cf|shtml)',
      filter: 'Anything',
      tokenise: false
    }
  }

  // inject corresponding state elems into URI at correct positions
  updateURI = () => {
    var fileFilter = fileFilters[this.state.filter]
    if (!this.state.tokenise) {
      this.setState({ uri: `intext:"${this.state.searchTerm.trim()}" intitle:"index.of" ${fileFilter} -inurl:(jsp|pl|php|html|aspx|htm|cf|shtml)` })
    } else {
      var tokens = this.state.searchTerm.replace(/ +(?= )/g, '').split(' ').filter(Boolean)
      this.setState({ uri: `intext:(${tokens.join('|')}) intitle:"index.of" ${fileFilter} -inurl:(jsp|pl|php|html|aspx|htm|cf|shtml)` })
    }
  }

  // keeps track of which radio buttons are currently pressed
  handleCheck = (event) => {
    this.setState({ filter: event.target.value }, () => {
      this.updateURI()
    })
  }

  // handle the state change when a user wants their query tokenised
  handleTokenise = (event) => {
    this.setState({ tokenise: !this.state.tokenise }, () => {
      this.updateURI()
    })
  }

  // updates state's URI when the textfield's content changes
  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value }, () => {
      this.updateURI()
    })
  }

  render () {
    const searchButton = (this.state.searchTerm.trim().length > 0)
      ? <a href={`https://www.google.com/search?q=${this.state.uri}`}
        target="_blank"
        rel="noopener noreferrer"
      >
        <Button
          variant="contained"
          color="secondary"
          startIcon={<Search />}
          style={{ margin: 'auto' }}
        >
        Find Directories
        </Button>
      </a>
      : <Button
        disabled
        startIcon={<Search />}
        style={{ margin: 'auto' }}
      >
      Find Directories
      </Button>

    return (
      <div>
        <StyledCard>
          <CardContent>
            <Grid style={{ alignItems: 'center' }} container spacing={3}>
              <Grid item xs={12} sm={6}>
                <TextField
                  name="searchTerm"
                  value={this.state.searchTerm}
                  onChange={this.handleChange}
                  id="standard-basic"
                  label="Search term"
                  margin="normal"
                  color="secondary"
                  variant="outlined"
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <Tooltip
                  title={'Split your query into words, using spaces as the delimiter. \
              May return more results. With this unchecked, the query is used to \
              find files containing or exactly your search string.'}
                  placement="right">
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={this.state.tokenise}
                        onChange={this.handleTokenise}
                        color="secondary"/>}
                    label="Tokenise input"
                    labelPlacement="start"
                  />
                </Tooltip>
              </Grid>
            </Grid>
            <Grid style={{ alignItems: 'center' }} container spacing={1}>
              <FormControl component="fieldset" name="filter">
                <RadioGroup style={{ justifyContent: 'center' }}
                  aria-label="position"
                  onChange={this.handleCheck}
                  value={this.state.filter} row
                >

                  {
                    // map button types as radio buttons into RadioGroup
                    directoryTypes.map(type => (
                      <Grid item key={type} xs={6} sm={3}>
                        <FormControlLabel
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

            <Grid style={{ alignItems: 'center' }} container spacing={3}>
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
                    <code>{(this.state.searchTerm.trim().length > 0) ? this.state.searchTerm : '(Please enter a search term)'}</code>
                  </Typography>
                  <Typography paragraph variant="h6">
                  Your advanced search query is...
                  </Typography>
                  <Typography
                    paragraph
                    color="textPrimary"
                    variant="body2"
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

export default OpenDirectory
