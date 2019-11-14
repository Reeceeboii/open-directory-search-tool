import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

class Home extends React.Component {
    render () {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Oops - 404 :(</h1>
          <Link to="/">Return</Link>
        </header>
      </div>
    );
  };
}
  
export default Home;