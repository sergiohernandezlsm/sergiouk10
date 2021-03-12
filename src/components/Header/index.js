import React from 'react';
import Button from '@material-ui/core/Button';
import css from './Header.module.scss';

const Header = () => {
  return (
    <Button variant="contained" color="primary">
      <div className={css.test}>Sergio testor</div>
    </Button>
  );
}

export default Header;