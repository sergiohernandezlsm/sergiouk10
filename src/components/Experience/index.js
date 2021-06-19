import React from 'react';
import Container from 'react-bootstrap/Container';
import css from './Experience.module.scss';
import experiences from '../../services/experience.json'

const skill = () => {
  return (
    <div className={css.root}>
      <Container>
        <div className={css.experienceWrapper}>
          <h4 className={css.title}>Skills Profile</h4>
          <div className={css.colorLine}></div>
          <ul className={css.listStyle}>
            {experiences.content.map((item, index) => {
              return <li key={index} primary={item} className={css.demo}><p>{item}</p></li>
            })}
          </ul>
        </div>
      </Container>
    </div>
  );
}

export default skill;