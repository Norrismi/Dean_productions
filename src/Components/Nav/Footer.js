import React from 'react'
import './StylesFooter.css'

const Footer = () => {

  let today = new Date()
  let currentYear = today.getFullYear()

    return (
        <div className="footer-container">

        <div className='footer'>
          {`© ${currentYear} St. Hillaire Productions, LLC • All Rights Reserved `}
        </div>
        </div>
    )

}

export default Footer