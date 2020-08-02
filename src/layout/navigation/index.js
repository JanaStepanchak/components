import React from 'react';
import { NavLink } from 'react-router-dom';
import './navigation.css';

const Navigation = () => (
  <div className="navigation">
    <nav>
     <ul className="nav1"> 
        <li><NavLink exact to="/demo">Demo</NavLink></li>
        <li><NavLink exact to="/demo2">Demo2</NavLink></li>
        <li><NavLink exact to="/demo3">Demo3</NavLink></li>
        <li><NavLink to="/card">Demo4 </NavLink></li>
        <li><NavLink exact to="/demo5">Demo5</NavLink></li>
        {/* <li className="components">Components <span class="fa fa-angle-down"></span>
        <ul className="nav menu-com">
                  
          {/* </ul>
          </li> */}
      </ul>
    </nav>
  </div>
);

export default Navigation;
