import React from 'react';
import contact from "../styles/contact.module.css";
import Header from '@/componant/Header';
import Footer from '@/componant/Footer';


const Conatact = () => {
  return (
    <><Header/>
    <div className={contact.main}>
      
      <h1 className={contact.hv}>Contact us</h1>
      <h2 className={contact.hu}>Let’s Start a Conversation</h2>
      <h3 className={contact.hw}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim.</h3>
       <div className={contact.cont}>
        <div className={contact.desc_cont}>
          <div className={contact.left}><h1>Working hours</h1>
          <div></div>
          <h2>Monday To Friday <br/>9:00 AM to 8:00 PM </h2>
          <h3>Our Support Team is available 24/7</h3></div>
          <div className={contact.right}>
            <h1>Contact Us</h1>
            <div></div>
            <h2>020 7993 2905</h2>
            <h3>hello@finsweet.com</h3>
          </div>

        </div>
        <input className={contact.input1} type='text' placeholder='Full Name'  />
        <input className={contact.input2} type='text' placeholder='Your Email'  />
        <select className={contact.input3}>
          <option>Query Releted</option>
          <option>Query Releted</option>
          <option>Query Releted</option>
          <option>Query Releted</option>
       
        </select>
        <textarea className={contact.input4} type='text' placeholder='Message'></textarea>
        <button className={contact.input5}><h1>Send Message</h1></button>
          
        </div>  
       
      
    </div> <Footer/></>
    
  );
}

export default Conatact;
