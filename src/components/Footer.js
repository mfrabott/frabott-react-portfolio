import React from 'react';
import '../styles/style.css'
import liLogo from '../assets/images/Linkedin-logo.png'
import ghLogo from '../assets/images/github.PNG'
import phoneLogo from '../assets/images/phone-img.png'
import emailLogo from '../assets/images/email-img.png'

export default function Header() {
  return (
    <div className='footer'>
      <section className="contact-info" id="contact-info">
          <p className='contact-spelled-out'><span className="contact-link"><a href="mailto: michael.frabott@gmail.com">Write</a></span> | michael.frabott@gmail.com</p>
          <a className='emailLogo' href="https://www.github.com/mfrabott" target="_blank" ><img src={emailLogo} className="contact-link contact-link-img"></img></a>
          <a href="https://www.github.com/mfrabott" target="_blank" ><img src={ghLogo} className="contact-link contact-link-img"></img></a>
          <a href="https://www.linkedin.com/in/michael-frabott" target="_blank"><img src={liLogo} className="contact-link contact-link-img"></img></a>
          <a className='phoneLogo' href="https://www.github.com/mfrabott" target="_blank" ><img src={phoneLogo} className="contact-link contact-link-img"></img></a>
          <p className='contact-spelled-out'><span className="contact-link"><a href="tel:6143063071">Dial</a></span> | (614) 306-3071</p>
      </section>
    </div>
  );
}
