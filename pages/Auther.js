import React from 'react';
import Image from 'next/image';
import auther from "../styles/auther.module.css"
import Header from '@/componant/Header';
import auther1 from "../public/authre1.png"
import icon from "../public/social_icon/facebooke.svg"
import icon1 from "../public/social_icon/instagram.svg"
import icon2 from "../public/social_icon/LIKDIN.svg"
import icon3 from "../public/social_icon/twwetr.svg"
import Footer from '@/componant/Footer';
import post1 from "../public/post/postbanner1.png"
import post2 from "../public/post/postbanner2.png"

const Auther = () => {
  return (
    <>
    <Header/>
    <div className={auther.main}>
        <section className={auther.auther_cont}>
            <div className={auther.rap}>
               <Image className={auther.hero} src={auther1}  alt ="d" />
            <div className={auther.auth_desc}>
                <h1>Hey there, I’m Andrew Jonhson and welcome to my Blog</h1>
                <h2>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Non blandit massa enim nec. Scelerisque viverra mauris in aliquam sem. At risus viverra adipiscing at in tellus.</h2>
                 <div className={auther.icon_cont}>
                    <Image src={icon} alt="d" />
                    <Image src={icon1} alt="d" />
                    <Image src={icon2} alt="d" />
                    <Image src={icon3} alt="d" />
                 </div>
           
            </div> 
           
            </div>
            <div className={auther.style}>
                <div className={auther.left}></div>
                <div className={auther.right}></div>
            </div>
            

        </section>
        <section className={auther.post_cons}>
  <h1 className={auther.start_line}>All Post</h1>
  <div className={auther.post_cont}>
      <Image  className={auther.image1} src={post1} alt='d' />
      <div className={auther.post_desc}>
          <h1>BUSINESS</h1>
          <h2>Font sizes in UI design: The complete guide to follow</h2>
           <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</h3>

      </div>


  </div>

  <div className={auther.post_cont}>
      <Image className={auther.image2} src={post2} alt='d' />
      <div className={auther.post_desc}>
          <h1>ECONOMY</h1>
          <h2>How to build rapport with your web design clients</h2>
           <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</h3>

      </div>


  </div>


</section>

       
      
    </div>
    <Footer/>
    </>
   
  );
}

export default Auther;
