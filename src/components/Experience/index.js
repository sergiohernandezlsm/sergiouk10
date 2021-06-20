import React, { useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import css from './Experience.module.scss';
import experiences from '../../services/experience.json'

const Skill = () => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    const test = () => {
      window.onscroll = () => {
        setCount(window.pageYOffset)
      }
      console.log(count);
    }
    window.addEventListener("scroll", test());
  },[count]);

  return (
    <div className={css.root} id="skills">
      <Container>
        <div className={css.experienceWrapper}>
          <h4 className={css.title}>Career Skills</h4>
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

export default Skill;