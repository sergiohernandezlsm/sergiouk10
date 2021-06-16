import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Profile from './components/Profile';
import WorkHistory from './components/WorkHistory';
import Experience from './components/Experience';
import Porfolio from './components/Porfolio';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import './App.scss';

function App() {
  return (
    <div className="App">
      <Header />
      <React.Fragment>
        <CssBaseline />
        <Container fixed>
          <Profile />
          <Experience />
          {/* <Porfolio /> */}
          <WorkHistory />
        </Container>
        <Footer />
      </React.Fragment>
    </div>
  );
}

export default App;
