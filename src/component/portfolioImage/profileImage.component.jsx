import React from 'react';
import profileImage from './logo.svg'
import './profileImage.component.css';
import { Image } from 'react-bootstrap'

const ProfileImage = () => {
   return (
      <div className="imageDiv">

         <Image src={profileImage} className="profileImage" />
      </div>
   );
};

export default ProfileImage;