import React from 'react';
import {MenuItems} from './MenuItems';
import Logo from '../../images/logo.png';


import '../../style/Navbar.css';

import AppBar from '@material-ui/core/AppBar';


class Navbar extends React.Component  {
  state = {
    clicked: false
  }

  handleClick = () => {
    this.setState({clicked: !this.state.clicked})
  } 

  render () {
    return(
      <AppBar position="sticky" className="appbar">
      <div className="nav" >
        <a href="/" >
          <img alt="logo" src={Logo} className="logo" />
        </a>
        <div className="menu-icon" onClick={this.handleClick}>
          <i className={this.state.clicked ? 'times icon' : 'bars icon'}/>
        </div>
        <ul className={this.state.clicked ? 'nav-menu active' : 'nav-menu'}>
          {MenuItems.map((item, index) => <li key={index}><a className={item.cName} href={item.url}>{item.title}</a></li>
          )}
        </ul>
      </div>
    </AppBar>
    )
 }
}



export default Navbar;