import React from 'react';
import Home from './components/Home'
import Header from './components/Header'
import Footer from './components/Footer'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

class App extends React.Component {
  state = { serverMessage: '' };

  componentDidMount() {
    fetch('/api/demo')
      .then(response => response.json())
      .then(data => this.setState({ serverMessage: data.message }));
  }

   render() {
    return (
      <>
        <Header/>
        <Footer/> 
      </>
    );
  }
}

export default App;