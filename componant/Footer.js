import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import style from "../styles/Footer.module.css"
import logo from "../public/Logo.svg"
import Icon1   from "../public/Footer_icon/intaa.svg"
import Icon2   from "../public/Footer_icon/1.svg"
import Icon3   from "../public/Footer_icon/Vector.svg"
import Icon4   from "../public/Footer_icon/Group.svg"


const Footer = () => {
  return (
    <div className={style.main}>
        <div className={style.logo_cant}>
            <Image src={logo} alt='j'/>
            <div className={style.nav_link}>
                <ul>
                    <li><Link href="/Home"> Home</Link></li>
                    <li> <Link href="/blog">Blog</Link> </li>
                    <li> <Link href="/About">About us</Link> </li>
                    <li> <Link href="/Conatact">Contact us</Link> </li>
                    <li> <Link href="/Privacypolicy">Privacy Policy</Link> </li>
                </ul>
                </div> </div>
        <div className={style.signup_cont}>
            <h1>Subscribe to our news letter to get latest updates and news</h1>
            <div className={style.signup}><input type='text' placeholder='Enter Your Email'/> <button><h2>Subscribe</h2></button></div>

            </div>        
      <div className={style.add_and_nav}>
        <div><h1>Finstreet 118 2561 Fintown<br/>
        Hello@finsweet.com  020 7993 2905</h1></div>
        <div className={style.social_rap}>
            <Image src={Icon2} alt='dd' />
            <Image src={Icon4} alt='dd' />
            <Image src={Icon3} alt='dd' />
            <Image src={Icon1} alt='dd' />

          </div>

         </div>
    </div>
  );
}

export default Footer;
