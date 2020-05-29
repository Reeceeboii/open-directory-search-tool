import React from 'react'
import { Link } from 'react-router-dom'
import Container from '@material-ui/core/Container'
import Button from '@material-ui/core/Button'
import ArrowBack from '@material-ui/icons/ArrowBack'
import '../App.css'

class Home extends React.Component {
  render () {
    return (
      <div className="App">
        <Container maxWidth="sm" className="CenteredContainer">
          <h1 className="Header">Oops - 404 :(</h1>
          <Link to="/">
            <Button
              variant="contained"
              color="secondary"
              startIcon={<ArrowBack />}
              style={{ margin: 'auto' }}
            >
              Return home
            </Button>
          </Link>
        </Container>
      </div>
    )
  };
}

export default Home
