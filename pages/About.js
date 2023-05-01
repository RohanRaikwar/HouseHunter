import React from 'react';
import Image from 'next/image';
import about from "../styles/About.module.css"
import Header from '@/componant/Header';
import Photo from "../public/category/photo.png"
import Joint from "../public/joint.png"
import photo2 from "../public/descution.png"
import auther from "../public/auther/auther1.png"
import auther1 from "../public/auther/auther2.png"
import Icon1   from "../public/social_icon/LIKDIN.svg"
import Icon2   from "../public/social_icon/facebooke.svg"
import Icon3   from "../public/social_icon/instagram.svg"
import Icon4   from "../public/social_icon/twwetr.svg"
import auther2 from "../public/auther/auther3.png"
import Footer from '@/componant/Footer';

import auther3 from "../public/auther/auther4.png"
import auther4 from "../public/auther/auther5.1.png"
import auther5 from "../public/auther/auther6.png"
import auther6 from "../public/auther/auther7.png"
import auther7 from "../public/auther/auther8.png"

const About = () => {
  return (
    <><Header/>
    <div className={about.main}> 
      <div className={about.text}>
        <div className={about.left}>
          <h1>ABOUT US</h1>
          <h2>We are a team of content writers who share their learnings</h2>
        </div>
        <div className={about.right}>
          <h1>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</h1>
        </div>
        
        

      

      </div>
      <div className={about.imag_cont}>
        <Image src={Photo} alt='gg' />  
        <div className={about.score_cont}>
        <div><h1>12+</h1><h2>Blogs Published</h2></div>
        <div><h1>18K+</h1><h2>Views on Finsweet</h2></div>
        <div><h1>30K+</h1><h2>Total active Users</h2></div>
       
      </div>
      <div className={about.Blue_green}>
        <div className={about.green}></div>
        <div className={about.yellow}></div>
      </div>
      </div>
      <section className={about.mission_cont}>
        <div className={about.mission} >
          <h1>Our mision</h1>
          <h2>Creating valuable content for creatives all around the world</h2>
          <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Non blandit massa enim nec. Scelerisque viverra mauris in aliquam sem. At risus viverra adipiscing at in tellus.</h3>
        </div>
        <div className={about.vision} >
          <h1>Our Vision</h1>
          <h2>A platform that empowers individuals to improve</h2>
          <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Non blandit massa enim nec. Scelerisque viverra mauris in aliquam sem. At risus viverra adipiscing at in tellus.</h3>
        </div>
      </section>
      <section className={about.crea_post}>
        <div className={about.left}>
          <h1>Our team of creatives</h1>
          <h2>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</h2>
          <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat.</h3>
        </div>
        <div className={about.right}>
          <Image  src={Joint } alt='ghg' />
          <div className={about.tree}> </div>

        </div>

      </section>
      <section className={about.start_blog_sec}>
     
     <div className={about.right}>
       <Image  src={photo2} alt='ghg' />
       <div className={about.tree}> </div>

     </div>
<div className={about.left}>
       <h1>Why we started this Blog</h1>
       <h2>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</h2>
       <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat.</h3>
     </div>
   </section>
   <section className={about.sixth_sec}>
      <h1>List of Authors</h1>
      <div className={about.auther_scroll}><div className={about.auther_rap}>
        <div className={about.auther_cont}>
          <Image className={about.hero} src={auther} alt='dd' />
          <h2>Floyd Miles</h2>
          <h3>Content Writer @Company</h3>
          <div className={about.social_rap}>
            <Image src={Icon2} alt='dd' />
            <Image src={Icon4} alt='dd' />
            <Image src={Icon3} alt='dd' />
            <Image src={Icon1} alt='dd' />

          </div>


        </div>
        <div className={about.auther_cont}>
          <Image className={about.hero} src={auther1} alt='dd' />
          <h2>Dianne Russell</h2>
          <h3>Content Writer @Company</h3>
          <div className={about.social_rap}>
          <Image src={Icon2} alt='dd' />
            <Image src={Icon4} alt='dd' />
            <Image src={Icon3} alt='dd' />
            <Image src={Icon1} alt='dd' />
          </div>


        </div>
        <div className={about.auther_cont}>
          <Image className={about.hero} src={auther2} alt='dd' />
          <h2>Jenny Wilson</h2>
          <h3>Content Writer @Company</h3>
          <div className={about.social_rap}>
          <Image src={Icon2} alt='dd' />
            <Image src={Icon4} alt='dd' />
            <Image src={Icon3} alt='dd' />
            <Image src={Icon1} alt='dd' />

          </div>


        </div>
        <div className={about.auther_cont}>
          <Image className={about.hero} src={auther3} alt='dd' />
          <h2>Leslie Alexander </h2>
          <h3>Content Writer @Company</h3>
          <div className={about.social_rap}>
          <Image src={Icon1} alt='dd' />
            <Image src={Icon4} alt='dd' />
            <Image src={Icon3} alt='dd' />
            <Image src={Icon1} alt='dd' />
          </div>


        </div>
        <div className={about.auther_cont}>
          <Image className={about.hero} src={auther4} alt='dd' />
          <h2>Leslie Alexander </h2>
          <h3>Content Writer @Company</h3>
          <div className={about.social_rap}>
          <Image src={Icon1} alt='dd' />
            <Image src={Icon4} alt='dd' />
            <Image src={Icon3} alt='dd' />
            <Image src={Icon1} alt='dd' />
          </div>


        </div>
        <div className={about.auther_cont}>
          <Image className={about.hero} src={auther5} alt='dd' />
          <h2>Leslie Alexander </h2>
          <h3>Content Writer @Company</h3>
          <div className={about.social_rap}>
          <Image src={Icon1} alt='dd' />
            <Image src={Icon4} alt='dd' />
            <Image src={Icon3} alt='dd' />
            <Image src={Icon1} alt='dd' />
          </div>


        </div>
        <div className={about.auther_cont}>
          <Image className={about.hero} src={auther6} alt='dd' />
          <h2>Leslie Alexander </h2>
          <h3>Content Writer @Company</h3>
          <div className={about.social_rap}>
          <Image src={Icon1} alt='dd' />
            <Image src={Icon4} alt='dd' />
            <Image src={Icon3} alt='dd' />
            <Image src={Icon1} alt='dd' />
          </div>


        </div>
        <div className={about.auther_cont}>
          <Image className={about.hero} src={auther7} alt='dd' />
          <h2>Leslie Alexander </h2>
          <h3>Content Writer @Company</h3>
          <div className={about.social_rap}>
          <Image src={Icon1} alt='dd' />
            <Image src={Icon4} alt='dd' />
            <Image src={Icon3} alt='dd' />
            <Image src={Icon1} alt='dd' />
          </div>


        </div></div>
      
          
         </div>
        

     </section>
     <section className={about.joineepart}>
       <h1>Join our team to be a part of our story</h1>
       <h2>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</h2>
       <button><h3>Join Now</h3></button>
     </section>

      
    </div>
    <Footer/>
    </>
  );
}

export default About;
