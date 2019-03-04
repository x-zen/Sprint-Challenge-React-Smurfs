import React, {Component} from 'react';
import './s.css';
import { NavLink } from 'react-router-dom'

class SmurfNav extends Component {
  render() {
    return (
      <div class='nav'>
        <h1>Smurf Village</h1>

        <div class='btn-box'>
          <NavLink to='/'>Home</NavLink>
          <NavLink to='/smurf-form'>New Smurf</NavLink>
        </div>
      </div>
    )
  }
}

export default SmurfNav;
