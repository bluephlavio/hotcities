import React from 'react';
import { Link } from 'react-router-dom';
import style from './Header.scss';

const Menu = () => (
  <div className={style.menu}>
    <ul className="navbar-nav">
      <li
        className="nav-item"
        data-toggle="collapse"
        data-target=".navbar-collapse.show"
      >
        <Link className="nav-link" to="/">Live</Link>
      </li>
      <li
        className="nav-item"
        data-toggle="collapse"
        data-target=".navbar-collapse.show"
      >
        <Link className="nav-link" to="/stats">Stats</Link>
      </li>
      <li
        className="nav-item"
        data-toggle="collapse"
        data-target=".navbar-collapse.show"
      >
        <Link className="nav-link" to="/apidocs">API</Link>
      </li>
      <li
        className="nav-item"
        data-toggle="collapse"
        data-target=".navbar-collapse.show"
      >
        <Link className="nav-link" to="/about">About</Link>
      </li>
    </ul>
  </div>
);

const Header = () => (
  <header className={style.header}>
    <nav className="navbar navbar-expand-md">
      <div className="navbar-header">
        <a href="/" className="navbar-brand">
          <h1 className={style.title}>HOT CITIES</h1>
          <h2 className={style.motto}>{'world\'s hottest city, now.'}</h2>
        </a>
      </div>
      <button
        type="button"
        className="navbar-toggler"
        data-toggle="collapse"
        data-target="#nav-id"
        aria-controls="#navId"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="fa fa-bars" />
      </button>
      <div
        className="collapse navbar-collapse justify-content-end"
        id="nav-id"
      >
        <Menu />
      </div>
    </nav>
    <hr />
  </header>
);

export default Header;