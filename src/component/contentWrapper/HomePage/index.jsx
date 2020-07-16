import React, { Component } from 'react'
import IntroPage from './introPage.component'
import About from './../About';
import Resume from './../Resume';
import Projects from './../Projects';
import Contacts from './../contact';

export default class index extends Component {
   render(props) {
      console.log(props)
      return (

         <div>
            <IntroPage />
         </div>
      )
   }
}
