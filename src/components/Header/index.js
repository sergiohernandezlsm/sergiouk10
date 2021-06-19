import React from 'react';
import css from './Header.module.scss';

export default function Header() {
  return (
    <div className={css.header}>
    <div className={css.topImageWrapper}>
      <h1 className={css.headerText}>{`Sergio Hernández`}<span>{`Web Developer`}</span></h1>
    </div>
    </div>
  );
}