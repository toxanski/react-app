import React from 'react';
import logoImage from '../../assets/images/logo.svg';
import { menu } from './menu';
import { Link, useHistory } from 'react-router-dom';

import styles from './Header.module.scss'; // в виде объекта{}

const Header = () => {

  const history = useHistory();

  return (
    <div className={styles.header}>
      <div className={styles.logo}>
        <img src={logoImage} alt="" height='50px' />
      </div>
      <div className={styles.wrapper}>
        <ul className={styles.menu}>
          {
            menu.map((item, i) => (
              <li key={`menu-item ${i}`}>
                <Link to={item.link}>{item.title}</Link>
              </li>
            ))
          }
        </ul>
        <div className={styles.buttons}>
          {/* styles['login-button'] - если есть -, _ и т.д. */}
          <button className={styles['login-button']} onClick={() => history.push('/about')}>Login</button>
          <button className={styles['sign-up-button']}>Sign Up</button>
        </div>
      </div>
    </div>
  );
};

export default Header;