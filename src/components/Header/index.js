import React from 'react';
import css from './Header.module.scss';
import Jumbotron from 'react-bootstrap/Jumbotron';

export default function Header() {
  return (
    <div className={css.header}>
    <Jumbotron className={css.topImageWrapper}>
      <h1 className={css.headerText}>{`Sergio Hernández`}<span>{`Web Developer`}</span></h1>
    </Jumbotron>
    </div>
  );
}