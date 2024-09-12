import React, { useRef } from 'react'
import InstagramIcon from '@mui/icons-material/Instagram';
import XIcon from '@mui/icons-material/X';
import YouTubeIcon from '@mui/icons-material/YouTube';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import SendIcon from '@mui/icons-material/Send';
import { Link } from 'react-router-dom';
import Styles from './Footer.module.scss';

const AboutData = {
  heading: ['Asmo', 'case'],
  content: ['Copyrights Asmocase Homes and Properties.', 'All rights reserved.'],
  socialIcons: [<InstagramIcon />, <XIcon />, <YouTubeIcon />, <LinkedInIcon />]
}

const companyMenu = {
  label: 'Company',
  menus: [
    { label: 'About Us', route: '/' },
    { label: 'Blog', route: '/' },
    { label: 'Contact Us', route: '/Contact Us' },
    { label: 'Pricing', route: '/' },
    { label: 'Testimoials', route: '/' },
  ]
}

const supportMenu = {
  label: 'Support',
  menus: [
    { label: 'Help Center', route: '/' },
    { label: 'Terms Of Service', route: '/' },
    { label: 'Legal', route: '/' },
    { label: 'Privacy Policy', route: '/' },
    { label: 'Status', route: '/' },
  ]
}



const Footer = () => {

  const email =useRef()


  const renderAboutPage = (data) => {
    const { heading, content, socialIcons } = data;
    return (
      <div className={Styles.aboutPage}>
        <div className={Styles.heading}>
          {heading.map((data, index) => <span key={index}>{data}</span>)}
        </div>

        <div className={Styles.content}>
          {content.map((data, index) => <div key={index}>{data}</div>)}
        </div>

        <div className={Styles.socialMedia}>
          {socialIcons.map((icons, index) => <span key={index}>{icons}</span>)}
        </div>
      </div>
    )
  }

  const renderMenu = (data) => {
    const { label, menus } = data
    return (
      <div className={Styles.menu}>
        <div className={Styles.subHeading}>
          {label}
        </div>
        <div className={Styles.menuItems}>
          {menus.map((menu, index) => (
            <Link
              key={index}
              to={menu.route}
            >
              {menu.label}
            </Link>

          ))}
        </div>
      </div>
    )
  }

  const handleNewsLetter = (event) => {
    event.preventDefault();

    const {current} = email
    console.log('email',current.value)
    email.current.value = ''

  }

  const renderNewsLetter = () => {
    return (
      <div className={Styles.newsLetter}>
        <div className={Styles.label}>Stay Up To Date</div>
       
        <form onSubmit={handleNewsLetter}>
        <div className={Styles.emailContainer}>
          <input  ref={email} type="email" placeholder='your email address' required />
          <button type='submit' className={Styles.sendIcon}><SendIcon /></button>
          </div>
        </form>
       
       
      </div>


    )
  }



  return (
    <footer>
      <div className={Styles.container}>
        {renderAboutPage(AboutData)}
        {renderMenu(companyMenu)}
        {renderMenu(supportMenu)}
        {renderNewsLetter()}
      </div>
    </footer>

  )
}

export default Footer