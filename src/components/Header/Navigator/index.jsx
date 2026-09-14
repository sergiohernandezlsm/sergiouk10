import React from 'react';
import css from './Navigator.module.scss';
import Nav from 'react-bootstrap/Nav';

export default function Navigator() {
  return (
    <div className={css.navigator}>
      <Nav className="justify-content-center">
        <Nav.Item>
          <Nav.Link href="#home">Home</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="#profile">Profile</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="#skills">Skills</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="#history">History</Nav.Link>
        </Nav.Item>
      </Nav>
    </div>
  );
}