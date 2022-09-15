import React from 'react'
import "../scss/main.scss"
import {Navlink, useNavigate} from 'react-router-dom'

function WebsitePortal() {
    const navigate = useNavigate();
    const navigateToWebsiteContent = () => {
        navigate('/content');
      };
  return (
    <div className='WebsitePortal'>
        <div className="header">
            <p>Website Portal</p>
        </div>
        <div className='portal-content'>
            <div className='content-p'><p>Forms</p></div>
            <div className='content-p' onClick={navigateToWebsiteContent}><p>Content</p></div>
        </div>
    </div>
  )
}

export default WebsitePortal