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



    const iconAllopenTL = () => {

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

      
        const tl13 = gsap.timeline();
        const tl14 = gsap.timeline();
        const tl15 = gsap.timeline();
        const tl16 = gsap.timeline();
        const tl17 = gsap.timeline();
        const tl18 = gsap.timeline();
        const tl19 = gsap.timeline();
        const tl20 = gsap.timeline();
        const tl21 = gsap.timeline();
    
        
        tl1.fromTo('.dev_1', { delay: 0, left: "35%", top: "-3", opacity: 1, duration: 0.5, scale: 0, },
            { delay: 0.9, opacity: 1, duration: 1, scale: 0.8, ease: "elastic.inOut(1, 0.7)" });
        tl2.fromTo('.dev_2', { delay: 0, left: "12%", top: "12%", opacity: 1, duration: 1, scale: 0, },
            { delay: 1, opacity: 1, duration: 1, scale: 0.8, ease: "elastic.inOut(1, 0.7)" });
        tl3.fromTo('.dev_3', { delay: 1, left: "-1%", top: "30%", opacity: 1, duration: 0.5, scale: 0, },
            { delay: 1.1, opacity: 1, duration: 1, scale: 0.8, ease: "elastic.inOut(1, 0.7)" });
        tl4.fromTo('.dev_4', { delay: 0, left: "-3%", top: "50%", opacity: 1, duration: 1, scale: 0, },
            { delay: 1.2, opacity: 1, duration: 1, scale: 0.8,  ease: "elastic.inOut(1, 0.3)" });
        tl5.fromTo('.dev_5', { delay: 0, left: "4%", top: "73%", opacity: 1, duration: 0.5, scale: 0, },
            { delay: 1.3, opacity: 1, duration: 1, scale: 0.8,  ease: "elastic.inOut(1, 0.3)" });
        tl6.fromTo('.dev_6', { delay: 0, left: "29%", top: "93%", opacity: 1, duration: 1, scale: 0, },
            { delay: 1.4, opacity: 1, duration: 1, scale: 0.8, ease: "elastic.inOut(1, 0.3)" });
        tl7.fromTo('.dev_7', { delay: 0, right: "31%", top: "0", opacity: 1, duration: 0.5, scale: 0, },
            { delay: 1.5, opacity: 1, duration: 0.5, scale: 0.8,  ease: "elastic.inOut(1, 0.3)" });
        tl8.fromTo('.dev_8', { delay: 0, right: "12%", top: "12%", opacity: 1, duration: 1, scale: 0, },
            { delay: 1.6, opacity: 1, duration: 1, scale: 0.8, ease: "elastic.inOut(1, 0.3)" });
        tl9.fromTo('.dev_9', { delay: 0, right: "-1%", top: "30%", opacity: 1, duration: 0.5, scale: 0, },
            { delay: 1.7, opacity: 1, duration: 1, scale: 0.8,  ease: "elastic.inOut(1, 0.3)" });
        tl10.fromTo('.dev_10', { delay: 0, right: "-3%", top: "50%", opacity: 1, duration: 1, scale: 0, },
            { delay: 1.8, opacity: 1, duration: 1, scale: 0.8, ease: "elastic.inOut(1, 0.3)" });
        tl11.fromTo('.dev_11', { delay: 0, right: "4%", top: "73%", opacity: 1, duration: 0.5, scale: 0, },
            { delay: 1.9, opacity: 1, duration: 1, scale: 0.8,  ease: "elastic.inOut(1, 0.3)" });
        tl12.fromTo('.dev_12', { delay: 0, right: "29%", top: "93%", opacity: 1, duration: 1, scale: 0, },
            { delay: 1.9, opacity: 1, duration: 1, scale: 0.8,  ease: "elastic.inOut(1, 0.3)" }); 
  
      tl13.fromTo('.anim_1', {  delay: 0.5, left: "31%", top: "0", opacity: 1, duration: 1, scale: 0, } , 
      { delay: 1.1, opacity: 1, duration: 1, scale: 0.8,   ease: "elastic.inOut(1, 0.7)",duration: 1 });  
      tl14.fromTo('.anim_2', { delay: 0.5,  left: "12%", top: "12%", opacity: 1, duration: 1, scale: 0, } , 
      {delay: 1.2,  opacity: 1, duration: 1, scale: 0.8,  ease: "elastic.inOut(1, 0.7)",duration: 1 });  
      tl15.fromTo('.anim_3', { delay: 0.5,   left: "-1%", top: "30%", opacity: 1, duration: 1, scale: 0, } ,
       {delay: 1.3,  opacity: 1, duration: 1, scale: 0.8,   ease: "elastic.inOut(1, 0.7)",duration: 1 });  
      tl16.fromTo('.anim_4', { delay: 0.5,  left: "-3%", top: "50%", opacity: 1, duration: 1, scale: 0, } , 
      { delay: 1.4, opacity: 1, duration: 1, scale: 0.8,  ease: "elastic.inOut(1, 0.7)",duration: 1 });  
      tl17.fromTo('.anim_5', { delay: 0.5,  left: "4%", top: "73%", opacity: 1, duration: 1, scale: 0, } ,
       { delay: 1.5, opacity: 1, duration: 1, scale: 0.8,  ease: "elastic.inOut(1, 0.7)",duration: 1 });  
      tl18.fromTo('.anim_6', { delay: 0.5,  right: "31%", top: "0", opacity: 1, duration: 1, scale: 0, } ,
       {delay: 1.6, opacity: 1, duration: 1, scale: 0.8,  ease: "elastic.inOut(1, 0.7)",duration: 1 });  
      tl19.fromTo('.anim_7', {  delay: 0.5, right: "12%", top: "12%", opacity: 1, duration: 1, scale: 0, } , 
      { delay: 1.7, opacity: 1, duration: 1, scale: 0.8,   ease: "elastic.inOut(1, 0.7)",duration: 1 });  
      tl20.fromTo('.anim_8', {  delay: 0.5, right: "-1%", top: "30%", opacity: 1, duration: 1, scale: 0, } , 
      {delay: 1.8, opacity: 1, duration: 1, scale: 0.8,  ease: "elastic.inOut(1, 0.7)",duration: 1 });  
      tl21.fromTo('.anim_9', { delay: 0.5,  right: "-3%", top: "50%", opacity: 1, duration: 1, scale: 0, } , 
      {delay: 1.9, opacity: 1, duration: 1, scale: 0.8,  ease: "elastic.inOut(1, 0.7)",duration: 1 });


        const tl22 = gsap.timeline();
        const tl23 = gsap.timeline();
        const tl24 = gsap.timeline();
        const tl25 = gsap.timeline();
        const tl26 = gsap.timeline();
        const tl27 = gsap.timeline();
    
    
     tl22.fromTo('.brand_1', { left: "31%", top: "0", opacity: 1, duration: 1, scale: 0, } ,
         {  delay: 1.1, opacity: 1, scale: 0.8,  ease: "none",duration: 1 });
    tl23.fromTo('.brand_2', { left: "12%", top: "12%", opacity: 1, duration: 1, scale: 0, } ,
         {  delay: 1.2, opacity: 1,  scale: 0.8,  ease: "none",duration: 1 });
    tl24.fromTo('.brand_3', { left: "-1%", top: "30%", opacity: 1, duration: 1, scale: 0, } , 
        { delay: 1.3, opacity: 1, scale: 0.8,  ease: "none",duration: 1 });
    tl25.fromTo('.brand_4', { right: "12%", top: "12%", opacity: 1, duration: 1, scale: 0, } , 
        { delay: 1.4, opacity: 1,  scale: 0.8,  ease: "none",duration: 1 });
    tl26.fromTo('.brand_5', { right: "-1%", top: "30%", opacity: 1, duration: 1, scale: 0, } ,
         { delay: 1.5, opacity: 1,  scale: 0.8,  ease: "none",duration: 1 });
    tl27.fromTo('.brand_6', { right: "-3%", top: "50%", opacity: 1, duration: 1, scale: 0, } ,
         { delay: 1.6, opacity: 1, scale: 0.8,  ease: "none",duration: 1 });
          
        return iconAllopenTL;

    }


    const iconAllcloseTL = () => {

        const tl1c = gsap.timeline();
        const tl2c = gsap.timeline();
        const tl3c = gsap.timeline();
        const tl4c = gsap.timeline();
        const tl5c = gsap.timeline();
        const tl6c = gsap.timeline();
        const tl7c = gsap.timeline();
        const tl8c = gsap.timeline();
        const tl9c = gsap.timeline();
        const tl10c = gsap.timeline();
        const tl11c = gsap.timeline();
        const tl12c = gsap.timeline();

        tl1c.fromTo('.dev_1', { delay: 0, left: "31%", top: "-3", opacity: 1, duration: 0.5, scale: 1, },
         { delay: 0.9, opacity: 1, duration: 1, scale: 0, ease: "elastic.inOut(1, 0.7)" });
        tl2c.fromTo('.dev_2', { delay: 0, left: "12%", top: "12%", opacity: 1, duration: 1, scale: 1, }, 
        { delay: 1, opacity: 1, duration: 1, scale: 0, ease: "elastic.inOut(1, 0.7)" });
        tl3c.fromTo('.dev_3', { delay: 1, left: "-1%", top: "30%", opacity: 1, duration: 0.5, scale: 1, }, 
        { delay: 1.1, opacity: 1, duration: 1, scale: 0, ease: "elastic.inOut(1, 0.7)" });
        tl4c.fromTo('.dev_4', { delay: 0, left: "-3%", top: "50%", opacity: 1, duration: 1, scale: 1, },
         { delay: 1.2, opacity: 1, duration: 1, scale: 0, ease: "elastic.inOut(1, 0.3)" });
        tl5c.fromTo('.dev_5', { delay: 0, left: "4%", top: "73%", opacity: 1, duration: 0.5, scale: 1, },
         { delay: 1.3, opacity: 1, duration: 1, scale: 0, ease: "elastic.inOut(1, 0.3)" });
        tl6c.fromTo('.dev_6', { delay: 0, left: "29%", top: "93%", opacity: 1, duration: 1, scale: 1, }, 
        { delay: 1.4, opacity: 1, duration: 1, scale: 0, ease: "elastic.inOut(1, 0.3)" });
        tl7c.fromTo('.dev_7', { delay: 0, right: "31%", top: "0", opacity: 1, duration: 0.5, scale: 1, }, 
        { delay: 1.5, opacity: 1, duration: 0.5, scale: 0, ease: "elastic.inOut(1, 0.3)" });
        tl8c.fromTo('.dev_8', { delay: 0, right: "12%", top: "12%", opacity: 1, duration: 1, scale: 1, },
         { delay: 1.6, opacity: 1, duration: 1, scale: 0, ease: "elastic.inOut(1, 0.3)" });
        tl9c.fromTo('.dev_9', { delay: 0, right: "-1%", top: "30%", opacity: 1, duration: 0.5, scale: 1, }, 
        { delay: 1.7, opacity: 1, duration: 1, scale: 0, ease: "elastic.inOut(1, 0.3)" });
        tl10c.fromTo('.dev_10', { delay: 0, right: "-3%", top: "50%", opacity: 1, duration: 1, scale: 1, }, 
        { delay: 1.8, opacity: 1, duration: 1, scale: 0, ease: "elastic.inOut(1, 0.3)" });
        tl11c.fromTo('.dev_11', { delay: 0, right: "4%", top: "73%", opacity: 1, duration: 0.5, scale: 1, },
         { delay: 1.9, opacity: 1, duration: 1, scale: 0, ease: "elastic.inOut(1, 0.3)" });
        tl12c.fromTo('.dev_12', { delay: 0, right: "29%", top: "93%", opacity: 1, duration: 1, scale: 1, },
         { delay: 1.9, opacity: 1, duration: 1, scale: 0, ease: "elastic.inOut(1, 0.3)" });

 

        return iconAllcloseTL;

    }



    useEffect(() => {

        const masterMergeTL = gsap.timeline();
        masterMergeTL.add(iconAllopenTL(), 1);

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



        const masterTL = gsap.timeline();


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




        const tl1dv = gsap.timeline();
        const tl2dv = gsap.timeline();
        const tl3dv = gsap.timeline();
        const tl4dv = gsap.timeline();
        const tl5dv = gsap.timeline();
        const tl6dv = gsap.timeline();
        const tl7dv = gsap.timeline();
        const tl8dv = gsap.timeline();
        const tl9dv = gsap.timeline();
        const tl10dv = gsap.timeline();
        const tl11dv = gsap.timeline();
        const tl12dv = gsap.timeline();

        const tl1an = gsap.timeline();
        const tl2an = gsap.timeline();
        const tl3an = gsap.timeline();
        const tl4an = gsap.timeline();
        const tl5an = gsap.timeline();
        const tl6an = gsap.timeline();
        const tl7an = gsap.timeline();
        const tl8an = gsap.timeline();
        const tl9an = gsap.timeline();
        const tl10an = gsap.timeline();
        const tl11an = gsap.timeline();
        const tl12an = gsap.timeline();


        const tl1br = gsap.timeline();
        const tl2br = gsap.timeline();
        const tl3br = gsap.timeline();
        const tl4br = gsap.timeline();
        const tl5br = gsap.timeline();
        const tl6br = gsap.timeline();
 






        // tlc101.fromTo('.line_1', { rotate: 0, },
        //  { rotate: 360, duration: 60, repeat: -1, ease: "elastic.Out(1, 0.9)",});
        // tlc102.fromTo('.line_2', { rotate: 0, }, 
        // { rotate: -360, duration: 60, repeat: -1, ease: "elastic.Out(1, 0.9)",});
        // tlc103.fromTo('.line_3', { rotate: 0, },
        //  { rotate: 360, duration: 60, repeat: -1, ease: "elastic.Out(1, 0.9)",});
        // tlc104.fromTo('.line_4', { rotate: 0, }, 
        // { rotate: -360, duration: 60, repeat: -1, ease: "elastic.Out(1, 0.9)",});
        // tlc105.fromTo('.line_5', { rotate: 0, }, 
        // { rotate: 360, duration: 60, repeat: -1, ease: "elastic.Out(1, 0.9)",});


        tl100.to('.coverLine', { scale: 1, duration: 1, opacity: 1, ease: "elastic.Out(1, 0.9)" });
        tl107.to('.animSvg', { yPercent: 100, duration: 3, });
        tl108.to('.animSvg', { delay: 5, yPercent: 100, xPercent:-25, duration: 2, });
        tl1000.to('.coverLine', { width: "100vh", height: "100vh", scale: 1.1, duration: 1.5, });



        tl1011.to('.line_1', { scale: 1, duration: 2, ease: "elastic.Out(1, 0.9)" });
        tl1022.to('.line_2', { scale: 1, duration: 2, ease: "elastic.Out(1, 0.9)" });
        tl1033.to('.line_3', { scale: 1, duration: 2, ease: "elastic.Out(1, 0.9)" });
        tl1044.to('.line_4', { scale: 1, duration: 2, ease: "elastic.Out(1, 0.9)" });
        tl1055.to('.line_5', { scale: 1, duration: 2, ease: "elastic.Out(1, 0.9)" });




        tl1dv.fromTo('.dev_1', { rotate: 0, }, 
        { rotate: -360, duration: 60, repeat: -1, ease: "elastic.Out(1, 0.9)",});
        tl2dv.fromTo('.dev_2', { rotate: 0, }, 
        { rotate: -360, duration: 60, repeat: -1, ease: "elastic.Out(1, 0.9)",});
        tl3dv.fromTo('.dev_3', { rotate: 0, }, 
        { rotate: -360, duration: 60, repeat: -1, ease: "elastic.Out(1, 0.9)",});
        tl4dv.fromTo('.dev_4', { rotate: 0, }, 
        { rotate: -360, duration: 60, repeat: -1, ease: "elastic.Out(1, 0.9)",});
        tl5dv.fromTo('.dev_5', { rotate: 0, }, 
        { rotate: -360, duration: 60, repeat: -1, ease: "elastic.Out(1, 0.9)",});
        tl6dv.fromTo('.dev_6', { rotate: 0, }, 
        { rotate: -360, duration: 60, repeat: -1, ease: "elastic.Out(1, 0.9)",});
        tl7dv.fromTo('.dev_7', { rotate: 0, }, 
        { rotate: -360, duration: 60, repeat: -1, ease: "elastic.Out(1, 0.9)",});
        tl8dv.fromTo('.dev_8', { rotate: 0, }, 
        { rotate: -360, duration: 60, repeat: -1, ease: "elastic.Out(1, 0.9)",});
        tl9dv.fromTo('.dev_9', { rotate: 0, }, 
        { rotate: -360, duration: 60, repeat: -1, ease: "elastic.Out(1, 0.9)",});
        tl10dv.fromTo('.dev_10', { rotate: 0, }, 
        { rotate: -360, duration: 60, repeat: -1, ease: "elastic.Out(1, 0.9)",});
        tl11dv.fromTo('.dev_11', { rotate: 0, }, 
        { rotate: -360, duration: 60, repeat: -1, ease: "elastic.Out(1, 0.9)",});
        tl12dv.fromTo('.dev_12', { rotate: 0, }, 
        { rotate: -360, duration: 60, repeat: -1, ease: "elastic.Out(1, 0.9)",});



        tl1an.fromTo('.anim_1', { rotate: 0, }, 
        { rotate: 360, duration: 60, repeat: -1, ease: "elastic.Out(1, 0.9)", });        
        tl2an.fromTo('.anim_2', { rotate: 0, }, 
        { rotate: 360, duration: 60, repeat: -1, ease: "elastic.Out(1, 0.9)",});
        tl3an.fromTo('.anim_3', { rotate: 0, }, 
        { rotate: 360, duration: 60, repeat: -1, ease: "elastic.Out(1, 0.9)", });
        tl4an.fromTo('.anim_4', { rotate: 0, }, 
        { rotate: 360, duration: 60, repeat: -1, ease: "elastic.Out(1, 0.9)",  });
        tl5an.fromTo('.anim_5', { rotate: 0, }, 
        { rotate: 360, duration: 60, repeat: -1, ease: "elastic.Out(1, 0.9)",  });
        tl6an.fromTo('.anim_6', { rotate: 0, }, 
        { rotate: 360, duration: 60, repeat: -1, ease: "elastic.Out(1, 0.9)", });
        tl7an.fromTo('.anim_7', { rotate: 0, }, 
        { rotate: 360, duration: 60, repeat: -1, ease: "elastic.Out(1, 0.9)", });
        tl8an.fromTo('.anim_8', { rotate: 0, }, 
        { rotate: 360, duration: 60, repeat: -1, ease: "elastic.Out(1, 0.9)",  });
        tl9an.fromTo('.anim_9', { rotate: 0, }, 
        { rotate: 360, duration: 60, repeat: -1, ease: "elastic.Out(1, 0.9)",  });
        tl10an.fromTo('.anim_10', { rotate: 0, }, 
        { rotate: 360, duration: 60, repeat: -1, ease: "elastic.Out(1, 0.9)",  });       
        tl11an.fromTo('.anim_11', { rotate: 0, }, 
        { rotate: 360, duration: 60, repeat: -1, ease: "elastic.Out(1, 0.9)",});
        tl12an.fromTo('.anim_12', { rotate: 0, }, 
        { rotate: 360, duration: 60, repeat: -1, ease: "elastic.Out(1, 0.9)",});



        tl1br.fromTo('.brand_1', { rotate: 0, }, 
        { rotate: -360, duration: 60, repeat: -1, ease: "elastic.Out(1, 0.9)",});
        tl2br.fromTo('.brand_2', { rotate: 0, }, 
        { rotate: -360, duration: 60, repeat: -1, ease: "elastic.Out(1, 0.9)",});
        tl3br.fromTo('.brand_3', { rotate: 0, }, 
        { rotate: -360, duration: 60, repeat: -1, ease: "elastic.Out(1, 0.9)",});
        tl4br.fromTo('.brand_4', { rotate: 0, }, 
        { rotate: -360, duration: 60, repeat: -1, ease: "elastic.Out(1, 0.9)",});
        tl5br.fromTo('.brand_5', { rotate: 0, }, 
        { rotate: -360, duration: 60, repeat: -1, ease: "elastic.Out(1, 0.9)",});
        tl6br.fromTo('.brand_6', { rotate: 0, }, 
        { rotate: -360, duration: 60, repeat: -1, ease: "elastic.Out(1, 0.9)",});
 

 




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


            .add(tl1dv, 1)
            .add(tl2dv, 1)
            .add(tl3dv, 1)
            .add(tl4dv, 1)
            .add(tl5dv, 1)
            .add(tl6dv, 1)
            .add(tl7dv, 1)
            .add(tl8dv, 1)
            .add(tl9dv, 1)
            .add(tl10dv, 1)
            .add(tl11dv, 1)
            .add(tl12dv, 1)

            .add(tl1an, 1)
            .add(tl2an, 1)
            .add(tl3an, 1)
            .add(tl4an, 1)
            .add(tl5an, 1)
            .add(tl6an, 1)
            .add(tl7an, 1)
            .add(tl8an, 1)
            .add(tl9an, 1)
            .add(tl10an, 1)
            .add(tl11an, 1)
            .add(tl12an, 1)


            .add(tl1br, 1)
            .add(tl2br, 1)
            .add(tl3br, 1)
            .add(tl4br, 1)
            .add(tl5br, 1)
            .add(tl6br, 1)
 
 



        ScrollTrigger.create({
            trigger: '#coverLine', // Replace with the ID or class of your trigger element
            start: 'top bottom',     // This triggers when the middle of the viewport reaches the middle of the trigger element
            end: '+=2500',      // You can adjust the 'end' value as needed 
            markers: true,
            duration: 3,            // Add markers for debugging (remove this in production)
            animation: masterTL,
            toggleActions: "restart pause resume reset",

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
                                    <div className="kolkata" data-speed="0.4" >We are from Kolkata,India.</div>
                                    <p  >Explore </p>
                                    <p>Digital </p>
                                    <p>Exeperience</p>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section>
                        <div className='pt-10' id='wraperPinSection' ref={wrapperPinRef}>
                            <div className='animSvg' data-speed="1.5" >
                                <WorksSvg />
                            </div>
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
                                    <h1 className='design' id='brandingButton'   >Branding & Designing</h1>
                                    <h2 className='application' id='devButton'  >Web & Mobile Application </h2>
                                    <h3 className='animaaton' id='animButton'  >2D & 3D Animation</h3>
                                    <h4 className='marketing' id='digiButton'   > Digital Marketing</h4>
                                    <h5 className='promotion' id='promoButton'  >Product Promotion</h5>
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
                        <img src='./bridge-night.svg' data-speed="1.3"></img>
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
