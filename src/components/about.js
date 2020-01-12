import React from 'react'
import { styled } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import Paper from '@material-ui/core/Paper'
import '../App.css'

const StyledTypography = styled(Typography)({
  color: '#565656'
})

const StyledPaper = styled(Paper)({
  padding: '20px',
  background: '#F0F0F0'
})

class About extends React.Component {
  render () {
    return (
      <div>
        <StyledPaper>
          <StyledTypography
            variant="h3"
          >
        About
          </StyledTypography>
          <StyledTypography
            variant="p"
          >
            {'This tool is built with the aim of helping in the hunt for \
           open directories. Inspired partly by '}
            <a
              className="text-link"
              href="https://www.reddit.com/r/opendirectories/"
              target="_blank"
              rel="noopener noreferrer"
            >r/opendirectories
            </a>
            {', it provides a way of using a search term and file extension filters \
           provided by search engines to uncover them. According to the \
           subreddit, open directories are \'unprotected directories of pics, \
           vids, music, software and otherwise interesting files.\''}
          </StyledTypography>
        </StyledPaper>
      </div>
    )
  };
}

export default About
