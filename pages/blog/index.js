import React from 'react';
import blog from "../../styles/Blog.module.css"
import Header from '@/componant/Header';
import Image from 'next/image';
import Blog1 from "../../public/Blog/blog.png"
import Blog2 from "../../public/Blog/blog1.png"
import Blog3 from "../../public/Blog/blog2.png"
import Blog4 from "../../public/Blog/blog4.png"
import Blog5 from "../../public/Blog/blog3.png"
import Cat_logo from "../../public/category/Icon.svg"
import Cat_logo1 from "../../public/category/economy (1).svg"
import Cat_logo2 from "../../public/category/Icon (2).svg"
import Cat_logo3 from "../../public/category/cyborg.svg"
import Footer from '@/componant/Footer';
import Link from 'next/link';

const Blog = () => {
  return (
    <div className={blog.main}>
      <Header/>
      <section className={blog.feature_post}>
        <div className={blog.fea_desc}>
          <h1>Featured Post</h1>
          <h2>Step-by-step guide to choosing great font pairs</h2>
          <h3>By John Doe   l   May 23, 2022 </h3>
          <h4>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.</h4>
          <button><h5>Read More 	&gt;</h5></button>
        </div><Image src={Blog1} alt='dd' />
      </section>
      <section className={blog.all_post}>
        <h1 className={blog.main}>All posts</h1>
        <div className={blog.line}></div>
  <Link href="/blog/Blogpost" >    <div className={blog.post_cont}><Image src={Blog2} alt='j'/><div className={blog.post_desc}>
          <h1>Startup</h1>
          <h2>  Design tips for designers that cover everything you need</h2>
          <h3>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.</h3>
          </div>
          </div></Link> 
        <div className={blog.post_cont}><Image src={Blog3} alt='j'/><div className={blog.post_desc}>
          <h1>BUSINESS</h1>
          <h2> Font sizes in UI design: The complete guide to follow</h2>
          <h3>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.</h3>
          </div>
          </div>
        <div className={blog.post_cont}><Image src={Blog2} alt='j'/><div className={blog.post_desc}>
          <h1>TECHNOLOGY</h1>
          <h2>How to build rapport with your web design clients</h2>
          <h3>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.</h3>
          </div>
          </div>
        <div className={blog.post_cont}><Image src={Blog4} alt='j'/><div className={blog.post_desc}>
          <h1>Startup</h1>
          <h2>Logo design trends to avoid in 2022</h2>
          <h3>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.</h3>
          </div>
          </div>
        <div className={blog.post_cont}><Image src={Blog5} alt='j'/><div className={blog.post_desc}>
          <h1>ECONOMY</h1>
          <h2>8 Figma design systems you can download for free today</h2>
          <h3>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.</h3>
          </div>
          </div>
          <div className={blog.next_btns}><h1 className={blog.pre_btn}>	&lt; Prev </h1><h2 >Next &gt;</h2></div>
          


      </section>
      <section className={blog.fourth_sec} >
      <h1 className={blog.heading}>Choose A Catagory</h1>
      <div className={blog.category_rap}>
        <div className={blog.category_cont}>
          <Image src={Cat_logo2} alt="jj" />
          <h2 className={blog.cot_name}>Business</h2>
          <h3 className={blog.cot_desc}>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</h3>
        </div>
        <div id={blog.sohan} className={blog.category_cont}>
          <Image src={Cat_logo} alt="jj" />
          <h2 className={blog.cot_name}>Startup</h2>
          <h3 className={blog.cot_desc}>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</h3>
        </div>
        <div className={blog.category_cont}>
          <Image src={Cat_logo1} alt="jj" />
          <h2 className={blog.cot_name}>Economy</h2>
          <h3 className={blog.cot_desc}>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</h3>
        </div>
        <div  className={blog.category_cont }>
          <Image src={Cat_logo3} alt="jj" />
          <h2 className={blog.cot_name}>Technology</h2>
          <h3 className={blog.cot_desc}>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</h3>
        </div>
      </div>

     </section>
     <section className={blog.joineepart}>
       <h1>Join our team to be a part of our story</h1>
       <h2>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</h2>
       <button><h3>Join Now</h3></button>
     </section>

     <Footer/>
      
    </div>
  );
}

export default Blog;

