import React, { useLayoutEffect, useRef, useEffect } from 'react';

 import gsap from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollSmoother } from 'gsap/ScrollSmoother';

 

 import WorksSvg from './WorksSvg';
 import MicroServices from './MicroServices';
 import Box from './Box';
 import './App.css'

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

function MainSection() {
  const main = useRef();
  const smoother = useRef();
  const wrapperPinRef = useRef(null);
 
  
 
const allIconTL = () => { 
    const tl1 = gsap.timeline();
    const tl2 = gsap.timeline();
    const tl3 = gsap.timeline();
    const tl4 = gsap.timeline();
    const tl5 = gsap.timeline();
    const tl6 = gsap.timeline();
    const tl7 = gsap.timeline();
    const tl8 = gsap.timeline();
    const tl9 = gsap.timeline();
    const tl10 = gsap.timeline();
    const tl11 = gsap.timeline();
    const tl12 = gsap.timeline();





    

 
    tl1.to('.dev_1', { delay:0, left: "31%", top: "-3", opacity: 1, duration: 0.5, scale: 0, });
    tl1.to('.dev_1', { delay:0.9, opacity: 1, duration: 1, scale: 1,  ease: "elastic.inOut(1, 0.7)" });  
  
    tl2.to('.dev_2', { delay:0, left: "12%", top: "12%", opacity: 1, duration: 1, scale: 0, });
    tl2.to('.dev_2', { delay:1, opacity: 1, duration: 1, scale: 1,  ease: "elastic.inOut(1, 0.7)" });  
   
    tl3.to('.dev_3', { delay:1, left: "-1%", top: "30%", opacity: 1, duration: 0.5, scale: 0, });
    tl3.to('.dev_3', { delay:1.1, opacity: 1, duration: 1, scale: 1, ease: "elastic.inOut(1, 0.7)"  });  
   
    tl4.to('.dev_4', { delay:0, left: "-3%", top: "50%", opacity: 1, duration: 1, scale: 0, });
    tl4.to('.dev_4', { delay:1.2, opacity: 1, duration: 1, scale: 1,  ease: "elastic.inOut(1, 0.3)" });  
   
    tl5.to('.dev_5', { delay:0, left: "4%", top: "73%", opacity: 1,  duration: 0.5, scale: 0, });
    tl5.to('.dev_5', { delay:1.3, opacity: 1, duration: 1, scale: 1, ease: "elastic.inOut(1, 0.3)"  });  
 
    tl6.to('.dev_6', { delay:0, left: "29%", top: "93%", opacity: 0, duration: 1, scale: 0, });
    tl6.to('.dev_6', { delay:1.4, opacity: 1, duration: 1, scale: 1, ease: "elastic.inOut(1, 0.3)"  });  
 
    tl7.to('.dev_7', { delay:0, right: "31%", top: "0", opacity: 1,  duration: 0.5,scale: 0, });
    tl7.to('.dev_7', { delay:1.5, opacity: 1, duration: 0.5, scale: 1,  ease: "elastic.inOut(1, 0.3)" });  
 
    tl8.to('.dev_8', { delay:0, right: "12%", top: "12%", opacity: 1, duration: 1, scale: 0, });
    tl8.to('.dev_8', { delay:1.6, opacity: 1, duration:1, scale: 1, ease: "elastic.inOut(1, 0.3)"  });  
 
    tl9.to('.dev_9', { delay:0, right: "-1%", top: "30%", opacity: 1, duration: 0.5, scale: 0, });
    tl9.to('.dev_9', { delay:1.7, opacity: 1, duration: 1, scale: 1, ease: "elastic.inOut(1, 0.3)"  });  

    tl10.to('.dev_10', { delay:0, right: "-3%", top: "50%", opacity: 1, duration: 1, scale: 0, });
    tl10.to('.dev_10', { delay:1.8, opacity: 1, duration: 1, scale: 1, ease: "elastic.inOut(1, 0.3)"  });  

    tl11.to('.dev_11', { delay:0, right: "4%", top: "73%", opacity: 1, duration: 0.5,scale: 0, });
    tl11.to('.dev_11', { delay:1.9, opacity: 1, duration: 1, scale: 1, ease: "elastic.inOut(1, 0.3)"  });  
 
    tl12.to('.dev_12', { delay:0, right: "29%", top: "93%", opacity: 0, duration: 1, scale: 0, });
    tl12.to('.dev_12', { delay:1.9, opacity: 1, duration: 1, scale: 1, ease: "elastic.inOut(1, 0.3)"  }); 
    
    
    return allIconTL;
  }



  useEffect(() => {

 
 

    const masterMergeTL = gsap.timeline();    
    masterMergeTL.add(allIconTL, 5)


    ScrollTrigger.create({
        trigger: '#wraperPinSection', // Replace with the ID or class of your trigger element
        start: 'top center',     // This triggers when the middle of the viewport reaches the middle of the trigger element
        end: 'center center',       // You can adjust the 'end' value as needed
        scrub: true,
        animation: masterMergeTL,        // Your master timeline animation
        toggleActions: "play pause resume reset",  
        markers: true,              // Add markers for debugging (remove this in production)
      });
  

    const wraperPinSection = wrapperPinRef.current;
    ScrollTrigger.create({
      trigger: '#wraperPinSection', // Replace with the ID or class of your trigger element
      start: 'center center',     // This triggers when the middle of the viewport reaches the middle of the trigger element
      end: '+=1500',       // You can adjust the 'end' value as needed
      scrub: true,
      pin: true,
      anticipatePin: 1,
      pinSpacing: false,
                 
    });



 

    const masterTL = gsap.timeline( );


    const tlc100 = gsap.timeline();
    const tlc101 = gsap.timeline();
    const tlc102 = gsap.timeline();
    const tlc103 = gsap.timeline();
    const tlc104 = gsap.timeline();
    const tlc105 = gsap.timeline();

    const tl1000 = gsap.timeline();
    const tl100 = gsap.timeline();
    const tl101 = gsap.timeline();
    const tl102 = gsap.timeline();
    const tl103 = gsap.timeline();
    const tl104 = gsap.timeline();
    const tl105 = gsap.timeline();
    const tl107 = gsap.timeline();
    const tl108 = gsap.timeline();
    const tl1011 = gsap.timeline();
    const tl1022 = gsap.timeline();
    const tl1033 = gsap.timeline();
    const tl1044 = gsap.timeline();
    const tl1055 = gsap.timeline();

    const tl1r = gsap.timeline();
    const tl2r = gsap.timeline();
    const tl3r = gsap.timeline();
    const tl4r = gsap.timeline();
    const tl5r = gsap.timeline();
    const tl6r = gsap.timeline();

    const tl7r = gsap.timeline();
    const tl8r = gsap.timeline();
    const tl9r = gsap.timeline();
    const tl10r = gsap.timeline();
    const tl11r = gsap.timeline();
    const tl12r = gsap.timeline();

    tlc101.fromTo('.line_1',  {rotate:0, } , {rotate:360,  duration: 20, repeat:-1,  ease: "elastic.Out(1, 0.9)" , repeatDelay: 1} );
    tlc102.to('.line_2', {rotate:0, } , {  rotate:-360,  duration: 20, repeat:-1,  ease: "elastic.Out(1, 0.9)"}); 
    tlc103.to('.line_3', {rotate:0, } , {  rotate:360, duration: 20, repeat:-1,  ease: "elastic.Out(1, 0.9)"}); 
    tlc104.to('.line_4', {rotate:0, } , { rotate:-360, duration: 20, repeat:-1, ease: "elastic.Out(1, 0.9)" }); 
    tlc105.to('.line_5', {rotate:0, } , {  rotate:360, duration: 20, repeat:-1,  ease: "elastic.Out(1, 0.9)"}); 


    tl100.to('.coverLine', {  scale: 1, duration: 1, opacity:1, ease: "elastic.Out(1, 0.9)" });
     tl107.to('.animSvg', {   yPercent:100, duration: 3,  }); 
     tl108.to('.animSvg', { delay:5,  yPercent:200, duration: 2,   });
    tl1000.to('.coverLine', {width:"100vh",height:"100vh",scale: 1.1, duration:2,   });

      tl1011.to('.line_1', {    scale: 1, duration:2, ease: "elastic.Out(1, 0.9)" });
      tl1022.to('.line_2', {  scale: 1,  duration:2, ease: "elastic.Out(1, 0.9)" });  
      tl1033.to('.line_3', {   scale: 1,  duration:2, });  
      tl1044.to('.line_4', {   scale: 1, duration:2, });  
      tl1055.to('.line_5', {    scale: 1, duration:2,});
      



      tl1r.fromTo('.dev_1', {rotate:0, } , {rotate:-360,  duration: 20, repeat:-1,  ease: "elastic.Out(1, 0.9)" , repeatDelay: 1}  ); 
      tl2r.fromTo('.dev_2',  {rotate:0, } , {rotate:-360,  duration: 20, repeat:-1,  ease: "elastic.Out(1, 0.9)" , repeatDelay: 1});      
      tl3r.fromTo('.dev_3',  {rotate:0, } , {rotate:-360,  duration: 20, repeat:-1,  ease: "elastic.Out(1, 0.9)" , repeatDelay: 1});      
      tl4r.fromTo('.dev_4',  {rotate:0, } , {rotate:-360,  duration: 20, repeat:-1,  ease: "elastic.Out(1, 0.9)" , repeatDelay: 1});       
      tl5r.fromTo('.dev_5', {rotate:0, } , {rotate:-360,  duration: 20, repeat:-1,  ease: "elastic.Out(1, 0.9)" , repeatDelay: 1});     
      tl6r.fromTo('.dev_6',  {rotate:0, } , {rotate:-360,  duration: 20, repeat:-1,  ease: "elastic.Out(1, 0.9)" , repeatDelay: 1});       
      tl7r.fromTo('.dev_7',  {rotate:0, } , {rotate:-360,  duration: 20, repeat:-1,  ease: "elastic.Out(1, 0.9)" , repeatDelay: 1});            
      tl8r.fromTo('.dev_8',  {rotate:0, } , {rotate:-360,  duration: 20, repeat:-1,  ease: "elastic.Out(1, 0.9)" , repeatDelay: 1});         
      tl9r.fromTo('.dev_9',  {rotate:0, } , {rotate:-360,  duration: 20, repeat:-1,  ease: "elastic.Out(1, 0.9)" , repeatDelay: 1});        
      tl10r.fromTo('.dev_10',  {rotate:0, } , {rotate:-360,  duration: 20, repeat:-1,  ease: "elastic.Out(1, 0.9)" , repeatDelay: 1});      
      tl11r.fromTo('.dev_11',  {rotate:0, } , {rotate:-360,  duration: 20, repeat:-1,  ease: "elastic.Out(1, 0.9)" , repeatDelay: 1});        
      tl12r.fromTo('.dev_12',  {rotate:0, } , {rotate:-360,  duration: 20, repeat:-1,  ease: "elastic.Out(1, 0.9)" , repeatDelay: 1}); 


     




    masterTL.add(tl100, 1)
          .add(tl100, 1)
      .add(tl101, 1.1)
      .add(tl102, 1.1)
      .add(tl103, 1.3)
      .add(tl104, 1.5)
      .add(tl105, 1.7)
      .add(tl102, 1.9)

      .add(tl1011, 3)
      .add(tl1022, 3)
      .add(tl1033, 3)
      .add(tl1044, 3)
      .add(tl1055, 3)
 
      .add(tlc101, 1)
      .add(tlc102, 1)
      .add(tlc103, 1)
      .add(tlc104, 1)
      .add(tlc105, 1)

      .add(tl1000, 2)


      .add(tl1r, 1)
      .add(tl2r, 1)
      .add(tl3r, 1)
      .add(tl4r, 1)
      .add(tl5r, 1)

      .add(tl6r, 1)
      .add(tl7r, 1)
      .add(tl8r, 1)
      .add(tl9r, 1)
      .add(tl10r, 1)
      .add(tl11r, 1)
      .add(tl12r, 1)



      ScrollTrigger.create({
      trigger: '#coverLine', // Replace with the ID or class of your trigger element
      start: 'top bottom',     // This triggers when the middle of the viewport reaches the middle of the trigger element
      end: '+=2500',      // You can adjust the 'end' value as needed 
      markers: true,  
      duration:3,            // Add markers for debugging (remove this in production)
      animation:masterTL,
       toggleActions: "play pause resume reset",      
      
    });











    return () => {
      // Cleanup ScrollTriggers
      ScrollTrigger.getAll().forEach((trigger) => {
        trigger.kill();
      });
    };
  }, []);


  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      smoother.current = ScrollSmoother.create({
        smooth: 2,
        effects: true,
      });
    }, main);
    return () => ctx.revert();
  }, []);


  return (
    <>
      <div id="smooth-wrapper" ref={main}>
        <div id="smooth-content">

          <section >
            <header className="text-gray-600 body-font">
              <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">

                  <span className="ml-3 text-xl "> <img src='phinix-logo.png' data-speed="0.9" ></img></span>
                </a>
                <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
                  <a className="mr-5 hover:text-gray-900">About</a>
                  <a className="mr-5 hover:text-gray-900">Work</a>
                  <a className="mr-5 hover:text-gray-900">3d website</a>
                  <a className="mr-5 hover:text-gray-900">Services</a>
                  <a className="mr-5 hover:text-gray-900">Contact</a>
                </nav>

              </div>
            </header>
            <div className="mainBg">
              <div className="container mx-auto">
                <div className="heroText" data-speed="1.8" >
                  <div className="cloude" data-speed="2"><img src='./clouds2.png' ></img></div>
 
                  <div className="cloude2" data-speed="1.3"><img src='./clouds2.png' ></img></div>
                  <div className="introText" data-speed="0.7">
                    Elevate your brand with our creative prowess! <br></br>
                    We're your one-stop destination for premium Branding, Designing,
                    Web & Mobile App Development, Animation, SEO, Marketing,
                    and captivating Product Promotion solutions.
                  </div>
                  <div className="kolkata"  data-speed="0.4" >We are from Kolkata,India.</div>
                  <p  >Explore </p>
                  <p>Digital </p>
                  <p>Exeperience</p>
                </div>
              </div>
            </div>
          </section>
          <section>
            <div className='pt-10' id='wraperPinSection' ref={wrapperPinRef}>
                <div className='animSvg' data-speed="1.5"> 
                   <WorksSvg />
                </div>
            <div className="cloude3" data-speed="1.5"><img src='./clouds2.png' ></img></div>
              <div className='coverLine' id='coverLine'  >
                <div className='line_0'></div>
                <div className='line_1'>
                  <div className="dev_1"> <img src="dev_1.svg" /></div>
                  <div className="dev_2"><img src="dev_2.svg" /></div>
                  <div className="dev_3"><img src="dev_3.svg" /></div>
                  <div className="dev_4"><img src="dev_4.svg" /></div>
                  <div className="dev_5"><img src="dev_5.svg" /></div>
                  <div className="dev_6"><img src="dev_6.svg" /></div>
                  <div className="dev_7"><img src="dev_7.svg" /></div>
                  <div className="dev_8"><img src="dev_8.svg" /></div>
                  <div className="dev_9"><img src="dev_9.svg" /></div>
                  <div className="dev_10"><img src="dev_10.svg" /></div>
                  <div className="dev_11"><img src="dev_11.svg" /></div>
                  <div className="dev_12"><img src="dev_12.svg" /></div>
                </div>
                <div className='line_2'>
                  <div className="anim_1"><img src="anim_1.svg" /></div>
                  <div className="anim_2"><img src="anim_2.svg" /></div>
                  <div className="anim_3"><img src="anim_3.svg" /></div>
                  <div className="anim_4"><img src="anim_4.svg" /></div>
                  <div className="anim_5"><img src="anim_5.svg" /></div>
                  <div className="anim_6"><img src="anim_6.svg" /></div>
                  <div className="anim_7"><img src="anim_7.svg" /></div>
                  <div className="anim_8"><img src="anim_8.svg" /></div>
                  <div className="anim_9"><img src="anim_9.svg" /></div>
                </div>
                <div className='line_3'>
                  <div className="brand_1"><img src="brand_1.svg" /></div>
                  <div className="brand_2"><img src="brand_2.svg" /></div>
                  <div className="brand_3"><img src="brand_3.svg" /></div>
                  <div className="brand_4"><img src="brand_4.svg" /></div>
                  <div className="brand_5"><img src="brand_5.svg" /></div>
                  <div className="brand_6"><img src="brand_6.svg" /></div>
                </div>
                <div className='line_4'>
                  <div className="digi_1"><img src="degi_1.svg" /></div>
                  <div className="digi_2"><img src="degi_2.svg" /></div>
                  <div className="digi_3"><img src="degi_3.svg" /></div>
                  <div className="digi_4"><img src="degi_4.svg" /></div>
                  <div className="digi_5"><img src="degi_5.svg" /></div>
                  <div className="digi_6"><img src="degi_6.svg" /></div>
                </div>
                <div className='line_5'>
                  <div className="promo_1"><img src="promo_1.svg" /></div>
                  <div className="promo_2"><img src="promo_2.svg" /></div>
                  <div className="promo_3"><img src="promo_3.svg" /></div>
                  <div className="promo_4"><img src="promo_4.svg" /></div>
                </div>
                <div className='top_line_srvc' >
                  <h1 id='brandingButton'   >Branding & Designing</h1>
                  <h2 id='devButton'  >Web & Mobile Application </h2>
                  <h3 id='animButton'  >2D & 3D Animation</h3>
                  <h4 id='digiButton'   > Digital Marketing</h4>
                  <h5 id='promoButton'  >Product Promotion</h5>
                </div>
              </div>

            </div>
          </section>


          <section classNameName="partFive"  >
          {/* <div className="cloude3" data-speed="1.1"><img src='./clouds2.png' ></img></div> */}
          </section>
          <section classNameName="partFive">            
          </section>
          <section classNameName="bridge">
          <MicroServices />
          </section>  
          <section > 
          <img src='./bridge-night.svg'  data-speed="1.3"></img>
          </section>
          <section >
          <Box />  
           </section>  
          <section > 
     
          </section>  
      
        </div>
      </div>

    </>
  );
}

export default MainSection;
