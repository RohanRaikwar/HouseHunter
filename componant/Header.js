import React from 'react';
import Logo from "../public/Logo.svg"
import Image from 'next/image';
import Link from 'next/link';
import style from "../styles/Header.module.css"
import menu from "../public/menu1.png"
import cross from "../public/close.png"
import { useState } from 'react';

const Header = () => {
  const [sigh,setsing]    = useState(true)

  const sohan =() =>{
    setsing(!sigh)
    console.log("ok");
  }
  return (
    <div className={style.header_cont} >
      <Image className={style.logo_btn} src={Logo} alt='logo'/>
      <Image className={style.menu_btn} onClick={sohan} style={{width:"44px",height:"34px",marginTop:"8px"}} src={menu} alt='jh' />
      <div className={style.no_rap} style={sigh?{right:"-720px"}:{right:"0px"}}><ul className={style.a_cont}>
        <li><Link href="/Home" >Home</Link></li>
        <li><Link href="/blog">Blog</Link></li>
        <li><Link href="/About">About Us</Link> </li>
        <li><Link href="/Conatact">Conatact Us</Link></li>
       
        
      </ul> <Image style={{width:"37px",height:"36px"}} className={style.cross_btn} onClick={sohan}  src={cross} alt="dd"/>
      <div className={style.sus_rap}> <Link href="/">Subscribe</Link></div></div>   
      


        
      
    </div>
  );
}

export default Header;
