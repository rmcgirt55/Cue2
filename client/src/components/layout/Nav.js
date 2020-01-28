import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { logout } from '../../actions/auth';
import "../../css/nav.css";

const Navbar = ({ auth: { isAuthenticated, loading }, logout }) => {
  const menuBtnRef = React.createRef();
  // console.log(menuBtnref);
  const hamburgerRef = React.createRef();
  const navRef = React.createRef();
  const menuNavRef = React.createRef();
  let showMenu = false; //Menu is not shown
  console.log(`showMenu initial: ${showMenu}`);

  const authLinks = (
    <ul ref={menuNavRef} className="menu-nav">
      <li className="menu-nav__item">
        <Link to='/profiles'>Musicians</Link>
      </li>
      <li className="menu-nav__item">
        <Link to='/posts'>Posts</Link>
      </li>
      <li className="menu-nav__item">
        <Link to='/dashboard'>
          <i className='fas fa-record-vinyl'></i>{' '}
          <span className='hide-sm'>Dashboard</span>
        </Link>
      </li>
      <li className="menu-nav__item">
        <a onClick={logout} href='#!'>
          <i className='fas fa-sign-out-alt' />{' '}
          <span className='hide-sm'>Logout</span>
        </a>
      </li>
    </ul>
  );

  const guestLinks = (
    <ul ref={menuNavRef} className="menu-nav">
      <li className="menu-nav__item">
        <Link to='/profiles'>+ MUSICIANS</Link>
      </li>
      <li className="menu-nav__item">
        <Link to='/register'>+ REGISTER</Link>
      </li>
      <li className="menu-nav__item">
        <Link to='/login'>+ LOGIN</Link>
      </li>
    </ul>
  );

  const toggleMenu = () => {
    console.log(`Fire ToggleMenu`)
    if(showMenu === false) {
      console.log(`If triggered`);
      hamburgerRef.current.classList.add('open');
      navRef.current.classList.add('open');
      menuNavRef.current.classList.add('open');

      const navItems = Array.from(menuNavRef.current.childNodes);
      navItems.forEach(item => item.classList.add('open'));

      showMenu = true;
      console.log(`showMenu: ${showMenu}`);
    } else {
      console.log(`Else triggered`);
      hamburgerRef.current.classList.remove('open');
      navRef.current.classList.remove('open');
      menuNavRef.current.classList.remove('open');

      const navItems = Array.from(menuNavRef.current.childNodes);
      navItems.forEach(item => item.classList.remove('open'));

      showMenu = false;
      console.log(`showMenu: ${showMenu}`);
    }
  }
  
  return (
    <div className="navbar">
      <h1 className="navHead">
        <Link to='/'>
          <i className='fas fa-record-vinyl'></i>
        </Link>
      </h1>
      <div ref={menuBtnRef} className="menu-btn" onClick={toggleMenu}>
        <span ref={hamburgerRef} className="menu-btn__burger" />
      </div>
      <nav ref={navRef} className="nav">
        {!loading &&(
          <Fragment>
            {isAuthenticated ? authLinks : guestLinks}      
          </Fragment>
        )}
      </nav>
    </div> 
  );
};

Navbar.propTypes = {
  logout: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps, { logout })(Navbar);
