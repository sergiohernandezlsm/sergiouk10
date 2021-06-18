import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Profile from './components/Profile';
import WorkHistory from './components/WorkHistory';
import Skill from './components/Experience';
import Container from 'react-bootstrap/Container';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';



function App() {
  return (
    <div className="App">
      <Header />
      <React.Fragment>
      <Container>
        <Profile />
      </Container>
      <Skill />
      <Container>
        <WorkHistory />
      </Container>
      <Footer />
      </React.Fragment>
    </div>
  );
}

export default App;
