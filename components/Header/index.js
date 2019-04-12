import React, { Component } from 'react';
import Link from 'next/link';
import {
  Navbar,
  NavbarBrand,
  NavbarToggler,
  Collapse,
  Nav,
  NavItem,
  NavLink,
} from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import style from './style.scss';

const Toggler = (props) => (
  <FontAwesomeIcon 
    icon="bars"
    className="d-inline d-md-none"
    {...props}
  />
);

class Header extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  render() {
    const { isOpen } = this.state;
    return (
      <div className={style.header}>
        <Navbar light expand="md">
          <NavbarBrand href="/">
            <h1 className={style.title}>Hot Cities</h1>
            <p className={style.motto}>world's hottest city, now</p>
          </NavbarBrand>
          <NavbarToggler tag={() => <Toggler onClick={this.toggle} />} />
          <Collapse isOpen={isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink tag={ props => <Link href="/">{ props.children }</Link> }>
                  <a>Home</a>
                </NavLink >
              </NavItem>
              <NavItem>
                <NavLink tag={ props => <Link href="/about">{ props.children }</Link> }>
                  <a>About</a>
                </NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}

export default Header;