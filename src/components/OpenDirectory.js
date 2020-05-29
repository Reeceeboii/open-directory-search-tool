import React from 'react'
import TextField from '@material-ui/core/TextField'
import CardContent from '@material-ui/core/CardContent'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import Typography from '@material-ui/core/Typography'
import FormControl from '@material-ui/core/FormControl'
import FormHelperText from '@material-ui/core/FormHelperText'
import InputLabel from '@material-ui/core/InputLabel'
import MenuItem from '@material-ui/core/MenuItem'
import Select from '@material-ui/core/Select'
import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button'
import Checkbox from '@material-ui/core/Checkbox'
import Tooltip from '@material-ui/core/Tooltip'
import Search from '@material-ui/icons/Search'
import StyledCard from '../components/StyledCard'

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
      ? <Button
          variant="contained"
          color="secondary"
          startIcon={<Search />}
          style={{ margin: 'auto' }}
          // open search term in new tab
          onClick={() => { window.open(`https://www.google.com/search?q=${this.state.uri}`, '_blank') }}
        >
        Find Directories
        </Button>
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
            <Grid style={{ alignItems: 'center' }} container>
              <Grid item xs={12} sm={6}>
                <Typography paragraph variant="h6">
                You are filtering down to...
                </Typography>
              </Grid>
              <Grid item xs={12} sm={6}>
                  <FormControl variant="outlined" color="secondary">
                    <InputLabel>File filter</InputLabel>
                    <Select
                      labelWidth={65}
                      value={this.state.filter}
                      onChange={this.handleCheck}
                    >
                      {
                        directoryTypes.map(type => (
                          <MenuItem value={type} key={type}>
                            {type}
                          </MenuItem>
                        ))
                      }

                    </Select>
                    <FormHelperText>Please pick a file type to search for.</FormHelperText>
                  </FormControl>
              </Grid>
            </Grid>
            <Grid style={{ alignItems: 'center' }} container>
              <Grid item xs={12} sm={6}>
                <Typography paragraph variant="h6">
                  Using the search term...
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
                  variant="outlined"
                />
              </Grid>
            </Grid>
            {searchButton}
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
                label="Tokenise"
                labelPlacement="start"
              />
            </Tooltip>
          </CardContent>
        </StyledCard>
      </div>
    )
  }
}

export default OpenDirectory
