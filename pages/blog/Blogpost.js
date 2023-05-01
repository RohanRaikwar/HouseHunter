import React from "react";
import post from "../../styles/Blogpost.module.css";
import Header from "@/componant/Header";
import Image from "next/image";
import Writer from "../../public/Profile picture.png";
import logo from "../../public/category/Icon.svg";
import Hero from "../../public/Blog/blog3.png";
import Post1 from "../../public/Blog/blog1.png";
import Post2 from "../../public/Blog/blog2.png";
import Post3 from "../../public/Blog/blog3.png";
import Footer from "@/componant/Footer";
import Banner from "../../public/front.png"

const Blogpost = () => {
  return (
    <div className={post.main}>
      <Header />
      <div className={post.writer}>
        <div className={post.writer_cont}>
          <div className={post.sohan}>
            <Image src={Writer} alt="hh" />{" "}
            <div className={post.name}>
              <h1>Andrew Jonson</h1>
              <h2>Posted on 27th January 2022</h2>
            </div>
          </div>

          <h1 className={post.step}>Step-by-step guide to choosing great font pairs</h1>
          <div className={post.cat_log}>
            <Image style={{margin:"13px 10px"}} src={logo} alt="h" />
            <h1>Startup</h1>
          </div>
        </div>
        <Image className={post.hero} src={Banner} alt="hh" />
        <div className={post.story}>
          <h1 className={post.heading1}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod.
          </h1>
          <h1 className={post.heading2}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Non
            blandit massa enim nec. Scelerisque viverra mauris in aliquam sem.
            At risus viverra adipiscing at in tellus. Sociis natoque penatibus
            et magnis dis parturient montes. Ridiculus mus mauris vitae
            ultricies leo. Neque egestas congue quisque egestas diam. Risus in
            hendrerit gravida rutrum quisque non.
          </h1>
          <h1 className={post.heading3}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod.
          </h1>
          <h1 className={post.heading4}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Non
            blandit massa enim nec. Scelerisque viverra mauris in aliquam sem.
            At risus viverra adipiscing at in tellus. Sociis natoque penatibus
            et magnis dis parturient montes. Ridiculus mus mauris vitae
            ultricies leo. Neque egestas congue quisque egestas diam. Risus in
            hendrerit gravida rutrum quisque non.
          </h1>

          <h1 className={post.heading5}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Non
            blandit massa enim nec. Scelerisque viverra mauris in aliquam sem.
            At risus viverra adipiscing at in tellus. Sociis natoque penatibus
            et magnis dis parturient montes. Ridiculus mus mauris vitae
            ultricies leo. Neque egestas congue quisque egestas diam. Risus in
            hendrerit gravida rutrum quisque non.
          </h1>
          <ul className={post.ul_li}>
            <li>Lorem ipsum dolor sit amet</li>
            <li>Neque egestas congue quisque egestas</li>
            <li>Non blandit massa enim nec scelerisque</li>
          </ul>
          <h1 className={post.heading6}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Non
            blandit massa enim nec. Scelerisque viverra mauris in aliquam sem.
            At risus viverra adipiscing at in tellus. Sociis natoque penatibus
            et magnis dis parturient montes. Ridiculus mus mauris vitae
            ultricies leo. Neque egestas congue quisque egestas diam. Risus in
            hendrerit gravida rutrum quisque non.
          </h1>
          <h1 className={post.heading7}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod.
          </h1>
          <h1 className={post.heading8}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Non
            blandit massa enim nec. Scelerisque viverra mauris in aliquam sem.
            At risus viverra adipiscing at in tellus. Sociis natoque penatibus
            et magnis dis parturient montes. Ridiculus mus mauris vitae
            ultricies leo. Neque egestas congue quisque egestas diam. Risus in
            hendrerit gravida rutrum quisque non.
          </h1>
        </div>
      </div>
      <div className={post.next_post}>
        <h1>What to read next</h1>
        <div className={post.post_scroll}><div className={post.nex_read}>
          <div className={post.post_cont}>
            <Image src={Post1} alt="hh" />
            <h1>By John Doe l Aug 23, 2021 </h1>
            <h2>
              A UX Case Study Creating a Studious Environment for Students:{" "}
            </h2>
            <h3>
              Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
              cupidatat non proident.
            </h3>
          </div>
          <div className={post.post_cont}>
            <Image src={Post2} alt="hh" />
            <h1>By John Doe l Aug 23, 2021 </h1>
            <h2>
              A UX Case Study Creating a Studious Environment for Students:{" "}
            </h2>
            <h3>
              Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
              cupidatat non proident.
            </h3>
          </div>
          <div className={post.post_cont}>
            <Image src={Post3} alt="hh" />
            <h1>By John Doe l Aug 23, 2021 </h1>
            <h2>
              A UX Case Study Creating a Studious Environment for Students:{" "}
            </h2>
            <h3>
              Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
              cupidatat non proident.
            </h3>
          </div>
        </div></div>
        
      </div>
      <section className={post.joineepart}>
       <h1>Join our team to be a part of our story</h1>
       <h2>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</h2>
       <button><h3>Join Now</h3></button>
     </section>
     <Footer/>
    </div>
  );
};

export default Blogpost;
