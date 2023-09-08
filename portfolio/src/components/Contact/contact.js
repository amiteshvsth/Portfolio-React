import React from 'react';
import './contact.css';
import Walmart from '../../assets/walmart.png';
import Adobe from '../../assets/adobe.png';
import Micorsoft from '../../assets/microsoft.png';
import Facebook from '../../assets/facebook.png';
import FacebookIcon from '../../assets/facebook-icon.png'
import TwitterIcon from '../../assets/twitter.png'
import YoutubeIcon from '../../assets/youtube.png'
import InstagramIcon from '../../assets/instagram.png'

const Contact = () => {
  return (
    <section id="contactPage">
        <div id="clients">
            <h1 className="contactPageTitle">My Clients</h1>
            <p className="clientDesc">
               I have had the opportunity to work with a diverse group of companies.
               Some of the notable companies I have worked with includes 
            </p>
            <div className="clientsImgs"><img src={Walmart} alt="Client" className="clientImg" />
            <img src={Adobe} alt="Client" className="clientImg" />
            <img src={Micorsoft} alt="Client" className="clientImg" />
            <img src={Facebook} alt="Client" className="clientImg" />
            </div>
        </div>
        <div id="contactPage">
            <h1 className="contactPageTitle">Contact Me</h1>
            <span className="contactDesc">Please fill out the form below to discuss any work opportunities.</span>
            <form  className="contactForm">
              <input type="text" className="name" placeholder='Your Name'/>
              <input type="text" className="email" placeholder='Your Email'/>
              <textarea className='msg' name="message" cols="30" rows="5" placeholder='Your Message'></textarea>
              <button type='submit' value='send' className="submitBtn">Submit</button>
              <div className="links">
                <img src={FacebookIcon} alt="Facebook" className="link" />
                <img src={TwitterIcon} alt="Twitter" className="link" />
                <img src={YoutubeIcon} alt="Youtube" className="link" />
                <img src={InstagramIcon} alt="Instagram" className="link" />
              </div>
            </form>
        </div>
    </section>
  );
}

export default Contact