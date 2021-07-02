import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Profile from '../../services/profile.json';
import profilePicture from '../../assets/images/sergio-2.png';
import css from './Profile.module.scss';


const profile = () => {
  return (
    <div className={css.root} id="profile">
      <Container>
        <Row>
          <Col md={5} className='d-none d-md-block'><img className={css.profilePic} src={profilePicture} alt="Sergio Hernandez" /></Col>
          <Col xs={12} md={7}>
            <h4 className={css.title}>Personal Profile</h4>
            <div className={css.colorLine}></div>
            <p>{Profile.description}</p>
            <div className={css.downloadFile}><a href="../../services/downloads/sergio-cv.pdf" target="_blank" title="Download sergios CV" download>Download CV</a></div></Col>
        </Row>
      </Container>
    </div>
  );
};

export default profile;