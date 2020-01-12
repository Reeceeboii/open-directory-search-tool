import React from 'react'
import PropTypes from 'prop-types'
import { styled } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'
import Container from '@material-ui/core/Container'
import Typography from '@material-ui/core/Typography'
import Box from '@material-ui/core/Box'
import GithubCorner from 'react-github-corner'
import Footer from '../components/footer'
import About from '../components/about'
import OpenDirectory from '../components/OpenDirectory'
import '../App.css'

const StyledTab = styled(Tab)({
  backgroundColor: '#455D85',
  borderBottom: '2px solid #FFFFFF'
})

const StyledTabs = styled(Tabs)({
  backgroundColor: '#455D85'
})

function TabPanel (props) {
  const { children, value, index, ...other } = props

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      <Box p={3}>{children}</Box>
    </Typography>
  )
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired
}

function a11yProps (index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`
  }
}

export default function SimpleTabs () {
  const [value, setValue] = React.useState(0)

  const handleChange = (event, newValue) => {
    setValue(newValue)
  }

  return (
    <div>
      <AppBar position="static">
        <StyledTabs value={value} onChange={handleChange}
          aria-label="simple tabs example"
          centered
        >
          <StyledTab label="Open Directory search tool" {...a11yProps(0)} />
          <StyledTab label="About" {...a11yProps(1)} />
        </StyledTabs>
        <GithubCorner
          size="45"
          href="https://github.com/Reeceeboii/open-directory-search-tool" />
      </AppBar>
      <TabPanel className="App" value={value} index={0}>
        <Container maxWidth="sm" className="CenteredContainer">
          <OpenDirectory />
        </Container>
      </TabPanel>
      <TabPanel className="App" value={value} index={1}>
        <Container maxWidth="sm" className="CenteredContainer">
          <About />
        </Container>
      </TabPanel>
      <TabPanel className="App" value={value} index={2}>
        <Container maxWidth="sm" className="CenteredContainer">
        </Container>
      </TabPanel>
      <Footer />
    </div>
  )
}
