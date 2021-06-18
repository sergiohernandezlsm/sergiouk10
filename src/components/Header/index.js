import React from 'react';
import css from './Header.module.scss';
import topImage from '../../assets/images/bq2.jpeg';

export default function Header() {
  return (
    <div className={css.header}>
      <div className={css.headerTop}>
        <h1 className={css.title}>
          Sergio Hernandez CV
        </h1>
      </div>
      <div className={css.topImageWrapper}>
        <img className={css.topImage} src={topImage} alt="programming"></img>
      </div>
    </div>
  );
}