import React from 'react'
import './Footer.css'
import {assets} from '../../assets/assets'
import {Link} from 'react-router-dom';

const Footer = () => {
  return (
    <div className='footer'id='footer'>
      <div className="footer-content">
        <div className="footer-content-left">
            <img src={assets.logo1} alt="" />
            <p>Best and delicious food, All the Time.</p>
            <div className="footer-social-icon">
              <a href="https://web.facebook.com/joel.ngunjiri.9"><img src={assets.facebook_icon} alt="" /></a>  
                <img src={assets.twitter_icon} alt="" />
              <a href="https://www.linkedin.com/in/joel-manga-68698311b/"><img src={assets.linkedin_icon} alt="" /></a>  
            </div>
        </div>
        <div className="footer-content-center">
             <h2>Company</h2>
             <ul>
             <Link to='/'><li>Home</li> </Link>
               <Link to='/aboutus'><li>About Us</li></Link> 
                <Link to='/shipping'><li>Shipping policy</li></Link>
               <Link to='/privacy'><li>Privacy policy</li></Link> 
             </ul>
        </div>
        <div className="footer-content-right">
           <h2>Get In Touch</h2> 
           <ul>
            <li>+2540702862932</li>
            <li>jmanga86@gmail.com</li>
           </ul>
        </div>
      </div>
      <hr />
      <p className="footer-copyright">Copyright @2024 - All Right Reserved. Developed by Joel Manga</p>
    </div>
  )
}

export default Footer
