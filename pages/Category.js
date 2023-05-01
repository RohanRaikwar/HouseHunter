import React from 'react';
import category from "../styles/category.module.css"
import Header from '@/componant/Header';
import Footer from '@/componant/Footer';
import Image from 'next/image';
import Link from 'next/link';
import Busi_img from "../public/Blog/blog1.png"
import CatImg3 from "../public/category/economy (1).svg"
import CatImg4 from "../public/category/cyborg.svg"
import CatImg1 from "../public/category/Icon.svg"
import CatImg2 from "../public/Icon11.png"
const Category = () => {
  return (
    <> 
    <Header/>
    <div className={category.main}>
        <section className={category.intro_cont}>
            <h1>Business</h1>
            <h2>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.</h2>
            <h3>Blog 	&gt; Business</h3>

        </section>
        <section className={category.detail_cont}>
            <div className={category.business_cont}>
                <div className={category.single_busi}>
                    <Image  src={Busi_img} alt="j" />
                    <div className={category.busi_desc}>
                        <h1>Business</h1>
                        <h2>Top 6 free website mockup tools 2022</h2>
                         <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Non blandit massa enim nec.</h3>
                    </div>


                </div>
                <div className={category.single_busi}>
                    <Image  src={Busi_img} alt="j" />
                    <div className={category.busi_desc}>
                        <h1>Business</h1>
                        <h2>Ten free foogle fonts that you should use</h2>
                         <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Non blandit massa enim nec.</h3>
                    </div>


                </div>
                <div className={category.single_busi}>
                    <Image  src={Busi_img} alt="j" />
                    <div className={category.busi_desc}>
                        <h1>Business</h1>
                        <h2>What did I learn from doing 50+ design sprints?</h2>
                         <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Non blandit massa enim nec.</h3>
                    </div>


                </div>
              
                <div className={category.single_busi}>
                    <Image  src={Busi_img} alt="j" />
                    <div className={category.busi_desc}>
                        <h1>Business</h1>
                        <h2>Top 6 free website mockup tools 2022</h2>
                         <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Non blandit massa enim nec.</h3>
                    </div>


                </div>
            </div>
            <div className={category.Category_cont}>
                <div className={category.cat_cont}>
                    <h1 className={category.hea}>Category</h1>
                    <div className={category.mohan}> <div id="first" className={category.single_cont }>
                        <Image src={CatImg1} alt='dd'/> <h1>Startup</h1>

                    </div>
                    <div className={category.single_cont}>
                        <Image src={CatImg2} alt='dd'/> <h1>Business</h1>

                    </div>
                    <div className={category.single_cont}>
                        <Image src={CatImg3} alt='dd'/> <h1>Economy</h1>

                    </div>
                    <div className={category.single_cont}>
                        <Image src={CatImg4} alt='dd'/> <h1>Technology</h1>

                    </div></div>
                   
                </div>
                <div className={category.Alltag}>
                    <h1 className={category.head_line}>All Tag</h1>
                    <div className={category.tag_rap}>
                        <div><h1>Business</h1></div>
                        <div><h1>Experience</h1></div>
                        <div><h1>Screen</h1></div>
                        <div><h1>Technology</h1></div>
                        <div><h1>Marketing</h1></div>
                        <div><h1>Life</h1></div>
                    </div>
                </div>
            </div>
        </section>



      
    </div>
    <Footer/>
    </>
   
  );
}

export default Category;
