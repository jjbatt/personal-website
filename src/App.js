import React from 'react';
import './App.css';
import {Container} from 'react-bootstrap';
import gamischImage from './gamisch-partenkirchen.jpeg';

import HomePage from './pages/HomePage';

const images = ["https://eu4.paradoxwikis.com/images/5/51/Countries.png", 
                "https://images.squarespace-cdn.com/content/v1/5ed0c11b667c0a7510b91ccc/1593009380177-8HZ3KWMW1G1XZSCEFMEL/The_Essentialist_Blog_Garmish16-1024x664.jpg?format=2500w",
                "https://m.media-amazon.com/images/I/81bfy++QOKL._AC_UF1000,1000_QL80_.jpg",
                "https://images.gog-statics.com/39eb234a8b057caf54e93c9158c3603fe12c387300455d53ba304e368f0ea3ac.jpg"]

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <HomePage images={images}/>
        <h1>Jake Battani</h1>
        <p>Computer Science @ UW-Madison</p>
      </header>
      <Container className="App-footer" fluid></Container>
    </div>
  );
}

export default App;
