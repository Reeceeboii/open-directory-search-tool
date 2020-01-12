import React from 'react'
import Typography from '@material-ui/core/Typography'
import { styled } from '@material-ui/core/styles'

import '../App.css'

const StyledTypography = styled(Typography)({
  color: '#FFF'
})

class Footer extends React.Component {
  render () {
    return (
      <StyledTypography
        align="center"
      >
                Made by <a
          className="text-link"
          href="https://www.reecemercer.dev"
          target="_blank"
          rel="noopener noreferrer"
        >Reece Mercer
        </a>
        {' '} | Find me on <a
          className="text-link"
          href="https://www.github.com/Reeceeboii"
          target="_blank"
          rel="noopener noreferrer"
        >GitHub
        </a>
      </StyledTypography>
    )
  }
}

export default Footer
