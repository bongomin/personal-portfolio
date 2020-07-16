import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import './listItem.css'

class List extends React.Component {
   state = {
      menuItems: [
         {
            label: "HOME",
            link: "/"
         },
         {
            label: "ABOUT",
            link: "About"
         },
         {
            label: "RESUME",
            link: <Link to="/Resume" />
         },
         {
            label: "PROJECTS",
            link: "/Projects"
         },
         {
            label: "CONTACT",
            link: "/contact"
         },

      ]
   }
   render() {
      const { menuItems } = this.state;

      return (
         <div className="listDiv">
            <ul>
               {menuItems.map((item, i) => (
                  <li key={i}><Link to={item.link} style={{ color: "White", textDecoration: "none" }}>{item.label}</Link></li>
               ))}
            </ul>
         </div>
      );

   }
}

export default List;