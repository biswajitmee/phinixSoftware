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
  const tl1 = gsap.timeline();
 

  useEffect(() => {

    const allmastertl = () => {

       
  
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
  
   
      tl1.to('.dev_1', { left: "31%", top: "-3", opacity: 1, duration: 1, scale: 0.1, });
      tl1.to('.dev_1', { opacity: 1, duration: 0.5, scale: 1, });
  
      tl2.to('.dev_2', { left: "12%", top: "12%", opacity: 1, duration: 1, scale: 0.1, });
      tl2.to('.dev_2', { opacity: 1, duration: 0.5, scale: 0.5, });
  
      tl3.to('.dev_3', { left: "-1%", top: "30%", opacity: 1, duration: 1, scale: 0.1, });
      tl3.to('.dev_3', { opacity: 1, duration: 0.5, scale: 0.5, });
  
      tl4.to('.dev_4', { left: "-3%", top: "50%", opacity: 1, duration: 1, scale: 0.1, });
      tl4.to('.dev_4', { opacity: 1, duration: 0.5, scale: 0.5, });
  
      tl5.to('.dev_5', { left: "4%", top: "73%", opacity: 1, duration: 1, scale: 0.1, });
      tl5.to('.dev_5', { opacity: 1, duration: 0.5, scale: 0.5, });
  
      tl6.to('.dev_6', { left: "29%", top: "93%", opacity: 0, duration: 1, scale: 0.1, });
      tl6.to('.dev_6', { opacity: 1, duration: 0.5, scale: 0.5, });
  
      tl7.to('.dev_7', { right: "31%", top: "0", opacity: 1, duration: 1, scale: 0.1, });
      tl7.to('.dev_7', { opacity: 1, duration: 0.5, scale: 0.5, });
  
      tl8.to('.dev_8', { right: "12%", top: "12%", opacity: 1, duration: 1, scale: 0.1, });
      tl8.to('.dev_8', { opacity: 1, duration: 0.5, scale: 0.5, });
  
      tl9.to('.dev_9', { right: "-1%", top: "30%", opacity: 1, duration: 1, scale: 0.1, });
      tl9.to('.dev_9', { opacity: 1, duration: 0.5, scale: 0.5, });
  
      tl10.to('.dev_10', { right: "-3%", top: "50%", opacity: 1, duration: 1, scale: 0.1, });
      tl10.to('.dev_10', { opacity: 1, duration: 0.5, scale: 0.5, });
  
      tl11.to('.dev_11', { right: "4%", top: "73%", opacity: 1, duration: 1, scale: 0.1, });
      tl11.to('.dev_11', { opacity: 1, duration: 0.5, scale: 0.5, });
  
      tl12.to('.dev_12', { right: "29%", top: "93%", opacity: 0, duration: 1, scale: 0.1, });
      tl12.to('.dev_12', { opacity: 1, duration: 0.5, scale: 0.5, });
  
   
  
      const tl13 = gsap.timeline();
      const tl14 = gsap.timeline();
      const tl15 = gsap.timeline();
      const tl16 = gsap.timeline();
      const tl17 = gsap.timeline();
      const tl18 = gsap.timeline();
      const tl19 = gsap.timeline();
      const tl20 = gsap.timeline();
      const tl21 = gsap.timeline();
  
  
      tl13.to('.anim_1', { left: "31%", top: "0", opacity: 1, duration: 1, scale: 0.5, });
      tl13.to('.anim_1', { opacity: 1, duration: 0.5, scale: 0.5, rotation: 360, ease: "none", 
      repeat: -1, duration: 30 });
  
      tl14.to('.anim_2', { left: "12%", top: "12%", opacity: 1, duration: 1, scale: 0.5, });
      tl14.to('.anim_2', { opacity: 1, duration: 0.5, scale: 0.5, rotation: 360, ease: "none",
       repeat: -1, duration: 30 });
  
      tl15.to('.anim_3', { left: "-1%", top: "30%", opacity: 1, duration: 1, scale: 0.5, });
      tl15.to('.anim_3', { opacity: 1, duration: 0.5, scale: 0.5, rotation: 360, ease: "none", 
      repeat: -1, duration: 30 });
  
      tl16.to('.anim_4', { left: "-3%", top: "50%", opacity: 1, duration: 1, scale: 0.5, });
      tl16.to('.anim_4', { opacity: 1, duration: 0.5, scale: 0.5, rotation: 360, ease: "none", 
      repeat: -1, duration: 30 });
  
      tl17.to('.anim_5', { left: "4%", top: "73%", opacity: 1, duration: 1, scale: 0.5, });
      tl17.to('.anim_5', { opacity: 1, duration: 0.5, scale: 0.5, rotation: 360, ease: "none", 
      repeat: -1, duration: 30 });
  
  
      tl8.to('.anim_6', { right: "31%", top: "0", opacity: 1, duration: 1, scale: 0.5, });
      tl8.to('.anim_6', { opacity: 1, duration: 0.5, scale: 0.5, rotation: 360, ease: "none", 
      repeat: -1, duration: 30 });
  
      tl9.to('.anim_7', { right: "12%", top: "12%", opacity: 1, duration: 1, scale: 0.5, });
      tl9.to('.anim_7', { opacity: 1, duration: 0.5, scale: 0.5, rotation: 360, ease: "none", 
      repeat: -1, duration: 30 });
  
      tl20.to('.anim_8', { right: "-1%", top: "30%", opacity: 1, duration: 1, scale: 0.5, });
      tl20.to('.anim_8', { opacity: 1, duration: 0.5, scale: 0.5, rotation: 360, ease: "none", 
      repeat: -1, duration: 30 });
  
      tl21.to('.anim_9', { right: "-3%", top: "50%", opacity: 1, duration: 1, scale: 0.5, });
      tl21.to('.anim_9', { opacity: 1, duration: 0.5, scale: 0.5, rotation: 360, ease: "none", 
      repeat: -1, duration: 30 });
  
   
  
      const tl22 = gsap.timeline();
      const tl23 = gsap.timeline();
      const tl24 = gsap.timeline();
      const tl25 = gsap.timeline();
      const tl26 = gsap.timeline();
      const tl27 = gsap.timeline();
  
  
      tl22.to('.brand_1', { left: "31%", top: "0", opacity: 1, duration: 1, scale: 0.5, });
      tl22.to('.brand_1', { opacity: 1, duration: 0.5, scale: 0.5, rotation: 360, ease: "none", 
      repeat: -1, duration: 30 });
  
      tl23.to('.brand_2', { left: "12%", top: "12%", opacity: 1, duration: 1, scale: 0.5, });
      tl23.to('.brand_2', { opacity: 1, duration: 0.5, scale: 0.5, rotation: 360, ease: "none",
       repeat: -1, duration: 30 });
  
      tl24.to('.brand_3', { left: "-1%", top: "30%", opacity: 1, duration: 1, scale: 0.5, });
      tl24.to('.brand_3', { opacity: 1, duration: 0.5, scale: 0.5, rotation: 360, ease: "none", 
      repeat: -1, duration: 30 });
  
  
      tl25.to('.brand_4', { right: "12%", top: "12%", opacity: 1, duration: 1, scale: 0.5, });
      tl25.to('.brand_4', { opacity: 1, duration: 0.5, scale: 0.5, rotation: 360, ease: "none", 
      repeat: -1, duration: 30 });
  
      tl26.to('.brand_5', { right: "-1%", top: "30%", opacity: 1, duration: 1, scale: 0.5, });
      tl26.to('.brand_5', { opacity: 1, duration: 0.5, scale: 0.5, rotation: 360, ease: "none", 
      repeat: -1, duration: 30 });
  
      tl27.to('.brand_6', { right: "-3%", top: "50%", opacity: 1, duration: 1, scale: 0.5, });
      tl27.to('.brand_6', { opacity: 1, duration: 0.5, scale: 0.5, rotation: 360, ease: "none", 
      repeat: -1, duration: 30 });
  
   
  
      const tl28 = gsap.timeline();
      const tl29 = gsap.timeline();
      const tl30 = gsap.timeline();
      const tl31 = gsap.timeline();
      const tl32 = gsap.timeline();
      const tl33 = gsap.timeline();
  
  
      tl28.to('.digi_1', { left: "31%", top: "0", opacity: 1, duration: 1, scale: 0.5, });
      tl28.to('.digi_1', { opacity: 1, duration: 0.5, scale: 0.5, rotation: 360, ease: "none", 
      repeat: -1, duration: 30 });
  
      tl29.to('.digi_2', { left: "12%", top: "12%", opacity: 1, duration: 1, scale: 0.5, });
      tl29.to('.digi_2', { opacity: 1, duration: 0.5, scale: 0.5, rotation: 360, ease: "none",
       repeat: -1, duration: 30 });
  
      tl30.to('.digi_3', { left: "-1%", top: "30%", opacity: 1, duration: 1, scale: 0.5, });
      tl30.to('.digi_3', { opacity: 1, duration: 0.5, scale: 0.5, rotation: 360, ease: "none", 
      repeat: -1, duration: 30 });
  
  
      tl31.to('.digi_4', { right: "12%", top: "12%", opacity: 1, duration: 1, scale: 0.5, });
      tl31.to('.digi_4', { opacity: 1, duration: 0.5, scale: 0.5, rotation: 360, ease: "none", 
      repeat: -1, duration: 30 });
  
      tl32.to('.digi_5', { right: "-1%", top: "30%", opacity: 1, duration: 1, scale: 0.5, });
      tl32.to('.digi_5', { opacity: 1, duration: 0.5, scale: 0.5, rotation: 360, ease: "none", 
      repeat: -1, duration: 30 });
  
      tl33.to('.digi_6', { right: "-3%", top: "50%", opacity: 1, duration: 1, scale: 0.5, });
      tl33.to('.digi_6', { opacity: 1, duration: 0.5, scale: 0.5, rotation: 360, ease: "none", 
      repeat: -1, duration: 30 });
  
  
  
  
      const tl34 = gsap.timeline();
      const tl35 = gsap.timeline();
      const tl36 = gsap.timeline();
      const tl37 = gsap.timeline();
   
  
  
      tl34.to('.promo_1', { left: "31%", top: "0", opacity: 1, duration: 1, scale: 0.5, });
      tl34.to('.promo_1', { opacity: 1, duration: 0.5, scale: 0.5, rotation: 360, ease: "none", 
      repeat: -1, duration: 30 });
  
      tl35.to('.promo_2', { left: "12%", top: "12%", opacity: 1, duration: 1, scale: 0.5, });
      tl35.to('.promo_2', { opacity: 1, duration: 0.5, scale: 0.5, rotation: 360, ease: "none",
       repeat: -1, duration: 30 });
  
      tl36.to('.promo_3', { left: "-1%", top: "30%", opacity: 1, duration: 1, scale: 0.5, });
      tl36.to('.promo_3', { opacity: 1, duration: 0.5, scale: 0.5, rotation: 360, ease: "none", 
      repeat: -1, duration: 30 });
  
  
      tl37.to('.promo_4', { right: "12%", top: "12%", opacity: 1, duration: 1, scale: 0.5, });
      tl37.to('.promo_4', { opacity: 1, duration: 0.5, scale: 0.5, rotation: 360, ease: "none", 
      repeat: -1, duration: 30 });
  
   
   




  
    
    //   gsap.to(".line_1", { rotation: 360, ease: "power1.inOut", repeat: -1, duration: 30, scale:1 });
    //   gsap.to(".line_2", { rotation: -360, ease: "power1.inOut", repeat: -2, duration: 30 , scale:1 });
    //   gsap.to(".line_3", { rotation: 360, ease: "power1.inOut", repeat: -1, duration: 30 , scale:1 });
    //   gsap.to(".line_4", { rotation: -360, ease: "power1.inOut", repeat: -1, duration: 30, scale:1  });
    //   gsap.to(".line_5", { rotation: 360, ease: "power1.inOut", repeat: -1, duration: 30, scale:1  });
  
   
    
  
  
  
    //   gsap.to(".dev_1", { rotation: -360, ease: "power1.inOut", repeat: -1, duration: 30 });
    //   gsap.to(".dev_2", { rotation: -360, ease: "power1.inOut", repeat: -1, duration: 30 });
    //   gsap.to(".dev_3", { rotation: -360, ease: "power1.inOut", repeat: -1, duration: 30 });
    //   gsap.to(".dev_4", { rotation: -360, ease: "power1.inOut", repeat: -1, duration: 30 });
    //   gsap.to(".dev_5", { rotation: -360, ease: "power1.inOut", repeat: -1, duration: 30 });
    //   gsap.to(".dev_6", { rotation: -360, ease: "power1.inOut", repeat: -1, duration: 30 });
    //   gsap.to(".dev_7", { rotation: -360, ease: "power1.inOut", repeat: -1, duration: 30 });
    //   gsap.to(".dev_8", { rotation: -360, ease: "power1.inOut", repeat: -1, duration: 30 });
    //   gsap.to(".dev_9", { rotation: -360, ease: "power1.inOut", repeat: -1, duration: 30 });
    //   gsap.to(".dev_10", { rotation: -360, ease: "power1.inOut", repeat: -1, duration: 30 });
    //   gsap.to(".dev_11", { rotation: -360, ease: "power1.inOut", repeat: -1, duration: 30 });
    //   gsap.to(".dev_12", { rotation: -360, ease: "power1.inOut", repeat: -1, duration: 30 });
  
  
  
  
    //   gsap.to(".anim_1", { rotation: 360, ease: "power1.inOut", repeat: -1, duration: 28 });
    //   gsap.to(".anim_2", { rotation: 360, ease: "power1.inOut", repeat: -1, duration: 28 });
    //   gsap.to(".anim_3", { rotation: 360, ease: "power1.inOut", repeat: -1, duration: 28 });
    //   gsap.to(".anim_4", { rotation: 360, ease: "power1.inOut", repeat: -1, duration: 28 });
    //   gsap.to(".anim_5", { rotation: 360, ease: "power1.inOut", repeat: -1, duration: 28 });
    //   gsap.to(".anim_6", { rotation: 360, ease: "power1.inOut", repeat: -1, duration: 28 });
    //   gsap.to(".anim_7", { rotation: 360, ease: "power1.inOut", repeat: -1, duration: 28 });
    //   gsap.to(".anim_8", { rotation: 360, ease: "power1.inOut", repeat: -1, duration: 28 });
    //   gsap.to(".anim_9", { rotation: 360, ease: "power1.inOut", repeat: -1, duration: 28 });
  
  
   
  
  
  
    
      masterTL.add(tl1, 0)
        .add(tl2, 0)
        .add(tl3, 0)
        .add(tl4, 0)
        .add(tl5, 0)
        .add(tl6, 0)
        .add(tl7, 0)
        .add(tl8, 0)
        .add(tl9, 0)
        .add(tl10, 0)
        .add(tl11, 0)
        .add(tl12, 0)
  
        .add(tl13, 0)
        .add(tl14, 0)
        .add(tl15, 0)
        .add(tl16, 0)
        .add(tl17, 0)
        .add(tl18, 0)
        .add(tl19, 0)
        .add(tl20, 0)
        .add(tl21, 0)
  
  
        .add(tl22, 0)
        .add(tl23, 0)
        .add(tl24, 0)
        .add(tl25, 0)
        .add(tl26, 0)
        .add(tl27, 0)
  
  
        .add(tl28, 0)
        .add(tl29, 0)
        .add(tl30, 0)
        .add(tl31, 0)
        .add(tl32, 0)
        .add(tl33, 0)
  
        .add(tl34, 0)
        .add(tl35, 0)
        .add(tl36, 0)
        .add(tl37, 0)
    
    }
  
    

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


    const opencelalltl = gsap.timeline( );
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


    tl100.to('.coverLine', {  scale: 0.5, duration: 1, opacity:1, });

     tl107.to('.animSvg', {   yPercent:100, duration: 3, ease: "elastic.inOut(1, 0.7)" });

     tl101.to('.line_1', {  scale: 1, duration: 0.5, ease: "elastic.inOut(1, 0.3)" });

     tl102.to('.line_2', {  scale: 1, duration: 0.5, ease: "elastic.inOut(1, 0.4)" });
 
     tl103.to('.line_3', {  scale: 1, duration: 0.5, ease: "elastic.inOut(1, 0.5)" });
 
     tl104.to('.line_4', {   scale: 1, duration: 0.5, ease: "elastic.inOut(1, 0.6)" });
 
     tl105.to('.line_5', {   scale: 1, duration: 0.5, ease: "elastic.inOut(1, 0.7)" });
     
     tl108.to('.animSvg', { delay:5,  yPercent:200, duration: 2, ease: "elastic.inOut(1, 0.7)" });

    tl100.to('.coverLine', {width:"100vh",       height:"100vh", 
       scale: 1,
     duration:2,
      ease: "elastic.inOut(1, 0.3)" });





      tl1011.to('.line_1', { rotate:360, repeat:-1,   duration: 20,   });

      tl1022.to('.line_2', { rotate:-360, repeat:-1, duration: 20,   });
  
      tl1033.to('.line_3', { rotate:360, repeat:-1, duration: 20,   });
  
      tl1044.to('.line_4', { rotate:-360, repeat:-1,  duration: 20,  });
  
      tl1055.to('.line_5', {  rotate:360, repeat:-1, duration: 20,  });
      







    opencelalltl.add(tl100, 1)
      .add(tl101, 1.1)
      .add(tl102, 1.1)
      .add(tl103, 1.2)
      .add(tl104, 1.3)
      .add(tl105, 1.3)
      .add(tl102, 1.1)


      .add(tl1011, 3)
      .add(tl1022, 3)
      .add(tl1033, 3)
      .add(tl1044, 3)
      .add(tl1055, 3)
 



      ScrollTrigger.create({
      trigger: '#coverLine', // Replace with the ID or class of your trigger element
      start: 'top bottom',     // This triggers when the middle of the viewport reaches the middle of the trigger element
      end: '+=2500',      // You can adjust the 'end' value as needed 
      markers: true,  
      duration:3,            // Add markers for debugging (remove this in production)
      animation:opencelalltl,
      toggleActions: "play pause resume reset",      
    });




    const masterMergeTL = gsap.timeline();    
    masterMergeTL.add(allmastertl, 10)


    ScrollTrigger.create({
        trigger: '#wraperPinSection', // Replace with the ID or class of your trigger element
        start: 'center center',     // This triggers when the middle of the viewport reaches the middle of the trigger element
        end: 'center center',       // You can adjust the 'end' value as needed
        scrub: true,
        animation: masterMergeTL,        // Your master timeline animation
        toggleActions: "play pause resume reset",  
        markers: true,              // Add markers for debugging (remove this in production)
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
                {/* <div className='animSvg' data-speed="1.5"> 
                   <WorksSvg />
                </div> */}
            {/* <div className="cloude3" data-speed="1.5"><img src='./clouds2.png' ></img></div> */}
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
                  <h1  >Branding & Designing</h1>
                  <h2> 2D & 3D Animation</h2>
                  <h3 >Web & Mobile Application  </h3>
                  <h4> Digital Marketing</h4>
                  <h5>Product Promotion</h5>
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
