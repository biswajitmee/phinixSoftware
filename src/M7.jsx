import React, { useLayoutEffect, useRef, useEffect } from 'react';

import gsap from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollSmoother } from 'gsap/ScrollSmoother';



// import WorksSvg from './WorksSvg';
import MicroServices from './MicroServices';
import Box from './Box';
import './App.css'

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

function MainSection() {
    const main = useRef();
    const smoother = useRef();
    const wrapperPinRef = useRef(null);

 

    const devOpenTLL = () => {             
        const devOpenTL = gsap.timeline();

        const tl1_devO = gsap.timeline();
        const tl2_devO = gsap.timeline();
        const tl3_devO = gsap.timeline();
        const tl4_devO = gsap.timeline();
        const tl5_devO = gsap.timeline();
        const tl6_devO = gsap.timeline();
        const tl7_devO = gsap.timeline();
        const tl8_devO = gsap.timeline();        
        const tl9_devO = gsap.timeline();
        const tl10_devO = gsap.timeline();
        const tl11_devO = gsap.timeline();
        const tl12_devO = gsap.timeline();
                     
 tl1_devO.fromTo('.dev_1', {  left: "45%", top: "-6%", opacity: 1, duration: 0.1, scale: 0, },
            { delay: 0.5, opacity: 1, duration: 1, scale: 0.6, ease: "elastic.inOut(1, 0.7)" });

  tl2_devO.fromTo('.dev_2', {  left: "16%", top: "2%", opacity: 1, duration: 0.1, scale: 0, },
            { delay: 0.55, opacity: 1, duration: 1, scale: 0.6, ease: "elastic.inOut(1, 0.7)" });

  tl3_devO.fromTo('.dev_3', { delay: 1, left: "0%", top: "21%", opacity: 0.1, duration: 0.5, scale: 0, },
            { delay: 0.60, opacity: 1, duration: 1, scale: 0.6, ease: "elastic.inOut(1, 0.7)" });

  tl4_devO.fromTo('.dev_4', {  left: "-6%", top: "45%", opacity: 1, duration: 0.1, scale: 0, },
            { delay: 0.65, opacity: 1, duration: 1, scale: 0.6,  ease: "elastic.inOut(1, 0.3)" });

  tl5_devO.fromTo('.dev_5', {  left: "0%", top: "68%", opacity: 1, duration: 0.1, scale: 0, },
            { delay: 0.70, opacity: 1, duration: 1, scale: 0.6,  ease: "elastic.inOut(1, 0.3)" });

 tl6_devO.fromTo('.dev_6', {  left: "16%", top: "85%", opacity: 1, duration: 0.1, scale: 0, },
            { delay: 0.75, opacity: 1, duration: 1, scale: 0.6, ease: "elastic.inOut(1, 0.3)" });
                             

tl7_devO.fromTo('.dev_8', {  right: "45%", top: "93%", opacity: 1, duration: 0.1, scale: 0, },
            { delay: 0.80, opacity: 1, duration: 1, scale: 0.6, ease: "elastic.inOut(1, 0.3)" });

tl8_devO.fromTo('.dev_12', {  right: "14%", top: "85%", opacity: 1, duration: 0.1, scale: 0, },
            { delay: 0.85, opacity: 1, duration: 1, scale: 0.6,  ease: "elastic.inOut(1, 0.3)" }); 
       
tl9_devO.fromTo('.dev_11', {  right: "0%", top: "68%", opacity: 1, duration: 0.1, scale: 0, },
            { delay: 0.90, opacity: 1, duration: 1, scale: 0.6,  ease: "elastic.inOut(1, 0.3)" });
    
tl10_devO.fromTo('.dev_10', {  right: "-7%", top: "45%", opacity: 1, duration: 0.1, scale: 0, },
            { delay: 0.95, opacity: 1, duration: 1, scale: 0.6, ease: "elastic.inOut(1, 0.3)" });    

tl11_devO.fromTo('.dev_9', {  right: "0%", top: "21%", opacity: 1, duration: 0.1, scale: 0, },
            { delay: 1.0, opacity: 1, duration: 1, scale: 0.6,  ease: "elastic.inOut(1, 0.3)" });    

tl12_devO.fromTo('.dev_7', {  right: "18%", top: "1%", opacity: 1, duration: 0.1, scale: 0, },
            { delay: 1.20, opacity: 1, duration: 0.5, scale: 0.6,  ease: "elastic.inOut(1, 0.3)" });
 


       
   devOpenTL.add(tl1_devO, 0.5)
            .add(tl2_devO,0.5)
            .add(tl3_devO, 0.5)
            .add(tl4_devO, 0.5)
            .add(tl5_devO, 0.5)
            .add(tl6_devO, 0.5)
            .add(tl7_devO, 0.5)
            .add(tl8_devO, 0.5)
            .add(tl9_devO, 0.5)
            .add(tl10_devO, 0.5)
            .add(tl11_devO, 0.5)
            .add(tl12_devO, 0.5)


            const addHoverEffect = (timeline, elementSelector) => {
                const element = document.querySelector(elementSelector);
        
                element.addEventListener("mouseenter", () => {
                    timeline.play();
                    gsap.to(element, { scale: 0.8, duration: 0.3 });
                });
        
                element.addEventListener("mouseleave", () => {
                    timeline.reverse();
                    gsap.to(element, { scale: 0.5, duration: 0.3 });
                });
            };
        
            // Example: add hover effect to timeline 1
           addHoverEffect(tl1_devO, ['.dev_1']);
           addHoverEffect(tl1_devO, ['.dev_2']);
           addHoverEffect(tl2_devO, ['.dev_3']);
           addHoverEffect(tl3_devO, ['.dev_4']);
           addHoverEffect(tl4_devO, ['.dev_5']);
           addHoverEffect(tl5_devO, ['.dev_6']);
           addHoverEffect(tl6_devO, ['.dev_7']);
           addHoverEffect(tl7_devO, ['.dev_8']);
           addHoverEffect(tl8_devO, ['.dev_9']);
           addHoverEffect(tl9_devO, ['.dev_10']);
           addHoverEffect(tl10_devO, ['.dev_11']);
           addHoverEffect(tl11_devO, ['.dev_12']);
        


            return devOpenTLL;

    }


    const marketingOpenTLL = () => { 



        const marketingOpenTL = gsap.timeline();

        const tl1_markO = gsap.timeline();
        const tl2_markO = gsap.timeline();
        const tl3_markO = gsap.timeline();
        const tl4_markO = gsap.timeline();
        const tl5_markO = gsap.timeline();
        const tl6_markO = gsap.timeline();
        const tl7_markO = gsap.timeline();
        const tl8_markO = gsap.timeline();        
        const tl9_markO = gsap.timeline();
        const tl10_markO = gsap.timeline();  

 tl1_markO.fromTo('.mark_1', {  left: "10%", top: "11%", opacity: 1, duration: 0.5, scale: 0, },
            { opacity: 1, duration: 1, scale: 0.6, ease: "elastic.inOut(1, 0.7)" });

 tl2_markO.fromTo('.mark_2', {  left: "-2%", top: "33%", opacity: 1, duration: 1, scale: 0, },
            {   opacity: 1, duration: 1, scale: 0.6, ease: "elastic.inOut(1, 0.7)" });

 tl3_markO.fromTo('.mark_3', { delay: 1, left: "-3%", top: "56%", opacity: 1, duration: 0.5, scale: 0, },
            {   opacity: 1, duration: 1, scale: 0.6, ease: "elastic.inOut(1, 0.7)" });
 
 tl4_markO.fromTo('.mark_4', {  left: "6%", top: "75%", opacity: 1, duration: 1, scale: 0, },
            {   opacity: 1, duration: 1, scale: 0.6, ease: "elastic.inOut(1, 0.3)" });
             
 tl5_markO.fromTo('.mark_5', {  left: "25%", top: "90%", opacity: 1, duration: 1, scale: 0, },
             {   opacity: 1, duration: 1, scale: 0.6, ease: "elastic.inOut(1, 0.3)" });



tl6_markO.fromTo('.mark_6', {  right: "10%", top: "11%", opacity: 1, duration: 0.5, scale: 0, },
            {   opacity: 1, duration: 0.5, scale: 0.6,  ease: "elastic.inOut(1, 0.3)" });

 tl7_markO.fromTo('.mark_7', {  right: "-2%", top: "33%", opacity: 1, duration: 0.5, scale: 0, },
            {   opacity: 1, duration: 1, scale: 0.6,  ease: "elastic.inOut(1, 0.3)" });

 tl8_markO.fromTo('.mark_8', {  right: "-3%", top: "56%", opacity: 1, duration: 1, scale: 0, },
            {   opacity: 1, duration: 1, scale: 0.6, ease: "elastic.inOut(1, 0.3)" });
 
 tl9_markO.fromTo('.mark_9', {  right: "6%", top: "75%", opacity: 1, duration: 1, scale: 0, },
            {  opacity: 1, duration: 1, scale: 0.6, ease: "elastic.inOut(1, 0.3)" });

 tl10_markO.fromTo('.mark_10', {  right: "25%", top: "90%", opacity: 1, duration: 1, scale: 0, },
            {   opacity: 1, duration: 1, scale: 0.6, ease: "elastic.inOut(1, 0.3)" });

 

 marketingOpenTL.add(tl1_markO, 1)
            .add(tl2_markO, 1.10)
            .add(tl3_markO, 1.22)
            .add(tl4_markO, 1.30)
            .add(tl5_markO, 1.40)


            .add(tl6_markO, 1.90)
            .add(tl7_markO, 1.80)
            .add(tl8_markO, 1.70)
            .add(tl9_markO, 1.60)
            .add(tl10_markO, 1.50)
             

            const addHoverEffect = (timeline, elementSelector) => {
                const element = document.querySelector(elementSelector);
        
                element.addEventListener("mouseenter", () => {
                    timeline.play();
                    gsap.to(element, { scale: 0.8, duration: 0.3 });
                });
        
                element.addEventListener("mouseleave", () => {
                    timeline.reverse();
                    gsap.to(element, { scale: 0.5, duration: 0.3 });
                });
            };
        
            // Example: add hover effect to timeline 1
           addHoverEffect(tl1_markO, ['.mark_1']);
           addHoverEffect(tl2_markO, ['.mark_2']);
           addHoverEffect(tl3_markO, ['.mark_3']);
           addHoverEffect(tl4_markO, ['.mark_4']);
           addHoverEffect(tl5_markO, ['.mark_5']);
           addHoverEffect(tl6_markO, ['.mark_6']);
           addHoverEffect(tl7_markO, ['.mark_7']);
           addHoverEffect(tl8_markO, ['.mark_8']);
           addHoverEffect(tl9_markO, ['.mark_9']);
           addHoverEffect(tl10_markO, ['.mark_10']);
 





            return marketingOpenTLL;


    }



    const brandOpenTLL = () => { 


        const brandOpenTL = gsap.timeline();

        const tl1_brndO = gsap.timeline();
        const tl2_brndO = gsap.timeline();
        const tl3_brndO = gsap.timeline();
        const tl4_brndO = gsap.timeline();
        const tl5_brndO = gsap.timeline();
        
        
        const tl6_brndO = gsap.timeline();
        const tl7_brndO = gsap.timeline();
        const tl8_brndO = gsap.timeline();
        const tl9_brndO = gsap.timeline();
        const tl10_brndO = gsap.timeline();


      
tl1_brndO.fromTo('.brand_1', {  left: "10%", top: "11%", opacity: 1, duration: 0.5, scale: 0, },
        {   opacity: 1, duration: 1, scale: 0.5, ease: "elastic.inOut(1, 0.7)" });
tl2_brndO.fromTo('.brand_2', {  left: "-2%", top: "33%", opacity: 1, duration: 1, scale: 0, },
        {   opacity: 1, duration: 1, scale: 0.5, ease: "elastic.inOut(1, 0.7)" });
tl3_brndO.fromTo('.brand_3', { delay: 1, left: "-3%", top: "56%", opacity: 1, duration: 0.5, scale: 0, },
        {   opacity: 1, duration: 1, scale: 0.5, ease: "elastic.inOut(1, 0.7)" });
tl4_brndO.fromTo('.brand_4', {  left: "6%", top: "75%", opacity: 1, duration: 1, scale: 0, },
        {   opacity: 1, duration: 1, scale: 0.5, ease: "elastic.inOut(1, 0.3)" });         
tl5_brndO.fromTo('.brand_5', {  left: "25%", top: "90%", opacity: 1, duration: 1, scale: 0, },
         {  opacity: 1, duration: 1, scale: 0.5, ease: "elastic.inOut(1, 0.3)" });


         tl6_brndO.fromTo('.brand_6', {  right: "10%", top: "11%", opacity: 1, duration: 0.5, scale: 0, },
        {   opacity: 1, duration: 0.5, scale: 0.5,  ease: "elastic.inOut(1, 0.3)" });
tl7_brndO.fromTo('.brand_7', {  right: "-2%", top: "33%", opacity: 1, duration: 0.5, scale: 0, },
        {   opacity: 1, duration: 1, scale: 0.5,  ease: "elastic.inOut(1, 0.3)" });
tl8_brndO.fromTo('.brand_8', {  right: "-3%", top: "56%", opacity: 1, duration: 1, scale: 0, },
        {  opacity: 1, duration: 1, scale: 0.5, ease: "elastic.inOut(1, 0.3)" });
tl9_brndO.fromTo('.brand_9', {  right: "6%", top: "75%", opacity: 1, duration: 1, scale: 0, },
        {  opacity: 1, duration: 1, scale: 0.5, ease: "elastic.inOut(1, 0.3)" });
tl10_brndO.fromTo('.brand_10', {  right: "25%", top: "90%", opacity: 1, duration: 1, scale: 0, },
        {  opacity: 1, duration: 1, scale: 0.5, ease: "elastic.inOut(1, 0.3)" });

      
        brandOpenTL.add(tl1_brndO, 2)
                    .add(tl2_brndO, 2.1)
                    .add(tl3_brndO, 2.2)
                    .add(tl4_brndO, 2.3)
                    .add(tl5_brndO, 2.4)
                    .add(tl10_brndO, 2.5)
                    .add(tl9_brndO, 2.6)
                    .add(tl8_brndO, 2.7)
                    .add(tl7_brndO, 2.8)
                    .add(tl6_brndO, 2.9)
                    
                    
                    const addHoverEffect = (timeline, elementSelector) => {
                        const element = document.querySelector(elementSelector);
                
                        element.addEventListener("mouseenter", () => {
                            timeline.play();
                            gsap.to(element, { scale: 0.8, duration: 0.3 });
                        });
                
                        element.addEventListener("mouseleave", () => {
                            timeline.reverse();
                            gsap.to(element, { scale: 0.5, duration: 0.3 });
                        });
                    };
                
                    // Example: add hover effect to timeline 1
                   addHoverEffect(tl1_brndO, ['.brand_1']);
                   addHoverEffect(tl2_brndO, ['.brand_2']);
                   addHoverEffect(tl3_brndO, ['.brand_3']);
                   addHoverEffect(tl4_brndO, ['.brand_4']);
                   addHoverEffect(tl5_brndO, ['.brand_5']);
                   addHoverEffect(tl6_brndO, ['.brand_6']);
                   addHoverEffect(tl7_brndO, ['.brand_7']);
                   addHoverEffect(tl8_brndO, ['.brand_8']);
                   addHoverEffect(tl9_brndO, ['.brand_9']);
                   addHoverEffect(tl10_brndO, ['.brand_10']);
         
                   
             
                    

                    return brandOpenTLL;             

    }



    const animOpenTLL = () => {     
        
        const animOpenTL = gsap.timeline();
     
        const tl1_animO = gsap.timeline();
        const tl2_animO = gsap.timeline();
        const tl3_animO = gsap.timeline();
        const tl4_animO = gsap.timeline();
        const tl5_animO = gsap.timeline();
        const tl6_animO = gsap.timeline();
        const tl7_animO = gsap.timeline();
        const tl8_animO = gsap.timeline();        
        const tl9_animO = gsap.timeline();
        const tl0_animO = gsap.timeline();
        const tl11_animO = gsap.timeline();
        const tl12_animO = gsap.timeline();
    
tl1_animO.fromTo('.anim_1', {  left: "45%", top: "-4%", opacity: 1, duration: 0.5, scale: 0, },
        {  opacity: 1, duration: 1, scale: 0.5, ease: "elastic.inOut(1, 0.7)" });

tl2_animO.fromTo('.anim_2', {  left: "18%", top: "4%", opacity: 1, duration: 1, scale: 0, },
        {  opacity: 1, duration: 1, scale: 0.5, ease: "elastic.inOut(1, 0.7)" });

tl3_animO.fromTo('.anim_3', { delay: 1, left: "2%", top: "21%", opacity: 1, duration: 0.5, scale: 0, },
        {  opacity: 1, duration: 1, scale: 0.5, ease: "elastic.inOut(1, 0.7)" });

tl4_animO.fromTo('.anim_4', {  left: "-4%", top: "45%", opacity: 1, duration: 1, scale: 0, },
        {   opacity: 1, duration: 1, scale: 0.5,  ease: "elastic.inOut(1, 0.3)" });

tl5_animO.fromTo('.anim_5', {  left: "0%", top: "68%", opacity: 1, duration: 0.5, scale: 0, },
        { opacity: 1, duration: 1, scale: 0.5,  ease: "elastic.inOut(1, 0.3)" });

tl6_animO.fromTo('.anim_6', {  left: "16%", top: "85%", opacity: 1, duration: 1, scale: 0, },
        {  opacity: 1, duration: 1, scale: 0.5, ease: "elastic.inOut(1, 0.3)" });



tl7_animO.fromTo('.anim_7', {  right: "18%", top: "4%", opacity: 1, duration: 0.5, scale: 0, },
        {  opacity: 1, duration: 0.5, scale: 0.5,  ease: "elastic.inOut(1, 0.3)" });

tl8_animO.fromTo('.anim_8', {  right: "2%", top: "21%", opacity: 1, duration: 0.5, scale: 0, },
        {  opacity: 1, duration: 1, scale: 0.5,  ease: "elastic.inOut(1, 0.3)" });

tl9_animO.fromTo('.anim_9', {  right: "-4%", top: "45%", opacity: 1, duration: 1, scale: 0, },
        {  opacity: 1, duration: 1, scale: 0.5, ease: "elastic.inOut(1, 0.3)" });

tl0_animO.fromTo('.anim_10', {  right: "0%", top: "68%", opacity: 1, duration: 0.5, scale: 0, },
        {   opacity: 1, duration: 1, scale: 0.5,  ease: "elastic.inOut(1, 0.3)" });

tl11_animO.fromTo('.anim_11', {  right: "16%", top: "85%", opacity: 1, duration: 1, scale: 0, },
        {   opacity: 1, duration: 1, scale: 0.5,  ease: "elastic.inOut(1, 0.3)" }); 

tl12_animO.fromTo('.anim_12', {  right: "45%", top: "96%", opacity: 1, duration: 1, scale: 0, },
    {  opacity: 1, duration: 1, scale: 0.5, ease: "elastic.inOut(1, 0.3)" });

    animOpenTL.add(tl1_animO, 0.1)
            .add(tl2_animO, 0.15)
            .add(tl3_animO,0.20)
            .add(tl4_animO, 0.25)
            .add(tl5_animO, 0.30)
            .add(tl6_animO, 0.35)

            .add(tl12_animO, 0.40)
            .add(tl11_animO,0.45)
            .add(tl0_animO, 0.50)
            .add(tl9_animO, 0.55)
            .add(tl8_animO, 0.60)
            .add(tl7_animO, 0.65)
           
         
            
            
            const addHoverEffect = (timeline, elementSelector) => {
                const element = document.querySelector(elementSelector);
        
                element.addEventListener("mouseenter", () => {
                    timeline.play();
                    gsap.to(element, { scale: 0.8, duration: 0.3 });
                });
        
                element.addEventListener("mouseleave", () => {
                    timeline.reverse();
                    gsap.to(element, { scale: 0.5, duration: 0.3 });
                });
            };
        
            // Example: add hover effect to timeline 1
           addHoverEffect(tl1_animO, ['.anim_1']);
           addHoverEffect(tl2_animO, ['.anim_2']);
           addHoverEffect(tl3_animO, ['.anim_3']);
           addHoverEffect(tl4_animO, ['.anim_4']);
           addHoverEffect(tl5_animO, ['.anim_5']);
           addHoverEffect(tl6_animO, ['.anim_6']);
           addHoverEffect(tl7_animO, ['.anim_7']);
           addHoverEffect(tl8_animO, ['.anim_8']);
           addHoverEffect(tl9_animO, ['.anim_9']);
           addHoverEffect(tl0_animO, ['.anim_10']);
           addHoverEffect(tl11_animO, ['.anim_11']);
           addHoverEffect(tl12_animO, ['.anim_12']);
        


            return animOpenTLL;

    }



    const devCloseTLL = () => {             
        const devCloseTL = gsap.timeline();

        const tl1_devC = gsap.timeline();
        const tl2_devC = gsap.timeline();
        const tl3_devC = gsap.timeline();
        const tl4_devC = gsap.timeline();
        const tl5_devC = gsap.timeline();
        const tl6_devC = gsap.timeline();
        const tl7_devC = gsap.timeline();
        const tl8_devC = gsap.timeline();        
        const tl9_devC = gsap.timeline();
        const tl10_devC = gsap.timeline();
        const tl11_devC = gsap.timeline();
        const tl12_devC = gsap.timeline();
                     
 tl1_devC.fromTo('.dev_1', {  left: "45%", top: "-4%", opacity: 1, duration: 0.5, scale: 0.8, },
            { delay: 0.5, opacity: 1, duration: 1, scale: 0, ease: "elastic.inOut(1, 0.7)" });

  tl2_devC.fromTo('.dev_2', {  left: "18%", top: "4%", opacity: 1, duration: 1, scale: 0.8, },
            { delay: 0.55, opacity: 1, duration: 1, scale: 0, ease: "elastic.inOut(1, 0.7)" });

  tl3_devC.fromTo('.dev_3', { delay: 1, left: "2%", top: "21%", opacity: 1, duration: 0.5, scale: 0.8, },
            { delay: 0.60, opacity: 1, duration: 1, scale: 0, ease: "elastic.inOut(1, 0.7)" });

  tl4_devC.fromTo('.dev_4', {  left: "-4%", top: "45%", opacity: 1, duration: 1, scale: 0.8, },
            { delay: 0.65, opacity: 1, duration: 1, scale: 0,  ease: "elastic.inOut(1, 0.3)" });

  tl5_devC.fromTo('.dev_5', {  left: "0%", top: "68%", opacity: 1, duration: 0.5, scale: 0.8, },
            { delay: 0.70, opacity: 1, duration: 1, scale: 0,  ease: "elastic.inOut(1, 0.3)" });

 tl6_devC.fromTo('.dev_6', {  left: "16%", top: "85%", opacity: 1, duration: 1, scale: 0.8, },
            { delay: 0.75, opacity: 1, duration: 1, scale: 0, ease: "elastic.inOut(1, 0.3)" });
                             

tl7_devC.fromTo('.dev_8', {  right: "45%", top: "96%", opacity: 1, duration: 1, scale: 0.8, },
            { delay: 0.80, opacity: 1, duration: 1, scale: 0, ease: "elastic.inOut(1, 0.3)" });

tl8_devC.fromTo('.dev_12', {  right: "16%", top: "85%", opacity: 1, duration: 1, scale: 0.8, },
            { delay: 0.85, opacity: 1, duration: 1, scale: 0,  ease: "elastic.inOut(1, 0.3)" }); 
       
tl9_devC.fromTo('.dev_11', {  right: "0%", top: "68%", opacity: 1, duration: 0.5, scale: 0.8, },
            { delay: 0.90, opacity: 1, duration: 1, scale: 0,  ease: "elastic.inOut(1, 0.3)" });
    
tl10_devC.fromTo('.dev_10', {  right: "-4%", top: "45%", opacity: 1, duration: 1, scale: 0.8, },
            { delay: 0.95, opacity: 1, duration: 1, scale: 0, ease: "elastic.inOut(1, 0.3)" });    

tl11_devC.fromTo('.dev_9', {  right: "2%", top: "21%", opacity: 1, duration: 0.5, scale: 0.8, },
            { delay: 1.0, opacity: 1, duration: 1, scale: 0,  ease: "elastic.inOut(1, 0.3)" });    

tl12_devC.fromTo('.dev_7', {  right: "18%", top: "4%", opacity: 1, duration: 0.5, scale: 0.8, },
            { delay: 1.20, opacity: 1, duration: 0.5, scale: 0,  ease: "elastic.inOut(1, 0.3)" });
 


       
            devCloseTL.add(tl1_devC, 0.5)
            .add(tl2_devC,0.5)
            .add(tl3_devC, 0.5)
            .add(tl4_devC, 0.5)
            .add(tl5_devC, 0.5)
            .add(tl6_devC, 0.5)
            .add(tl7_devC, 0.5)
            .add(tl8_devC, 0.5)
            .add(tl9_devC, 0.5)
            .add(tl10_devC, 0.5)
            .add(tl11_devC, 0.5)
            .add(tl12_devC, 0.5)


            return devCloseTLL;

    }


    const marketingCloseLL = () => { 



        const marketingCloseTL = gsap.timeline();

        const tl1_markC = gsap.timeline();
        const tl2_markC = gsap.timeline();
        const tl3_markC = gsap.timeline();
        const tl4_markC = gsap.timeline();
        const tl5_markC = gsap.timeline();
        const tl6_markC = gsap.timeline();
        const tl7_markC = gsap.timeline();
        const tl8_markC = gsap.timeline();        
        const tl9_markC = gsap.timeline();
        const tl10_markC = gsap.timeline();  

 tl1_markC.fromTo('.mark_1', {  left: "10%", top: "11%", opacity: 1, duration: 0.5, scale: 0.8, },
            { opacity: 1, duration: 1, scale: 0, ease: "elastic.inOut(1, 0.7)" });

 tl2_markC.fromTo('.mark_2', {  left: "-2%", top: "33%", opacity: 1, duration: 1, scale: 0.8, },
            {   opacity: 1, duration: 1, scale: 0, ease: "elastic.inOut(1, 0.7)" });

 tl3_markC.fromTo('.mark_3', { delay: 1, left: "-3%", top: "56%", opacity: 1, duration: 0.5, scale: 0.8, },
            {   opacity: 1, duration: 1, scale: 0, ease: "elastic.inOut(1, 0.7)" });
 
 tl4_markC.fromTo('.mark_4', {  left: "6%", top: "75%", opacity: 1, duration: 1, scale: 0.8, },
            {   opacity: 1, duration: 1, scale: 0, ease: "elastic.inOut(1, 0.3)" });
             
 tl5_markC.fromTo('.mark_5', {  left: "25%", top: "90%", opacity: 1, duration: 1, scale: 0.8, },
             {   opacity: 1, duration: 1, scale: 0, ease: "elastic.inOut(1, 0.3)" });

tl6_markC.fromTo('.mark_6', {  right: "10%", top: "11%", opacity: 1, duration: 0.5, scale: 0.8, },
            {   opacity: 1, duration: 0.5, scale: 0,  ease: "elastic.inOut(1, 0.3)" });

 tl7_markC.fromTo('.mark_7', {  right: "-2%", top: "33%", opacity: 1, duration: 0.5, scale: 0.8, },
            {   opacity: 1, duration: 1, scale: 0,  ease: "elastic.inOut(1, 0.3)" });

 tl8_markC.fromTo('.mark_8', {  right: "-3%", top: "56%", opacity: 1, duration: 1, scale: 0.8, },
            {   opacity: 1, duration: 1, scale: 0, ease: "elastic.inOut(1, 0.3)" });
 
 tl9_markC.fromTo('.mark_9', {  right: "6%", top: "75%", opacity: 1, duration: 1, scale: 0.8, },
            {  opacity: 1, duration: 1, scale: 0, ease: "elastic.inOut(1, 0.3)" });

 tl10_markC.fromTo('.mark_10', {  right: "25%", top: "90%", opacity: 1, duration: 1, scale: 0.8, },
            {   opacity: 1, duration: 1, scale: 0, ease: "elastic.inOut(1, 0.3)" });
1
 

            marketingCloseTL.add(tl1_markC, 1)
            .add(tl2_markC, 1.10)
            .add(tl3_markC, 1.22)
            .add(tl4_markC, 1.30)
            .add(tl5_markC, 1.40)


            .add(tl6_markC, 1.90)
            .add(tl7_markC, 1.80)
            .add(tl8_markC, 1.70)
            .add(tl9_markC, 1.60)
            .add(tl10_markC, 1.50)
             

            return marketingCloseLL;


    }



    const brandCloseTLL = () => { 


        const brandCloseTL = gsap.timeline();

        const tl1_brndC = gsap.timeline();
        const tl2_brndC = gsap.timeline();
        const tl3_brndC = gsap.timeline();
        const tl4_brndC = gsap.timeline();
        const tl5_brndC = gsap.timeline();
        
        
        const tl6_brndC = gsap.timeline();
        const tl7_brndC = gsap.timeline();
        const tl8_brndC = gsap.timeline();
        const tl9_brndC = gsap.timeline();
        const tl10_brndC = gsap.timeline();


      
tl1_brndC.fromTo('.brand_1', {  left: "10%", top: "11%", opacity: 1, duration: 0.5, scale: 0.8, },
        {   opacity: 1, duration: 1, scale: 0, ease: "elastic.inOut(1, 0.7)" });
tl2_brndC.fromTo('.brand_2', {  left: "-2%", top: "33%", opacity: 1, duration: 1, scale: 0.8, },
        {   opacity: 1, duration: 1, scale: 0, ease: "elastic.inOut(1, 0.7)" });
tl3_brndC.fromTo('.brand_3', { delay: 1, left: "-3%", top: "56%", opacity: 1, duration: 0.5, scale: 0.8, },
        {   opacity: 1, duration: 1, scale: 0, ease: "elastic.inOut(1, 0.7)" });
tl4_brndC.fromTo('.brand_4', {  left: "6%", top: "75%", opacity: 1, duration: 1, scale: 0.8, },
        {   opacity: 1, duration: 1, scale: 0, ease: "elastic.inOut(1, 0.3)" });         
tl5_brndC.fromTo('.brand_5', {  left: "25%", top: "90%", opacity: 1, duration: 1, scale: 0.8, },
         {  opacity: 1, duration: 1, scale: 0, ease: "elastic.inOut(1, 0.3)" });


         tl6_brndC.fromTo('.brand_6', {  right: "10%", top: "11%", opacity: 1, duration: 0.5, scale: 0.8, },
        {   opacity: 1, duration: 0.5, scale: 0,  ease: "elastic.inOut(1, 0.3)" });
tl7_brndC.fromTo('.brand_7', {  right: "-2%", top: "33%", opacity: 1, duration: 0.5, scale: 0.8, },
        {   opacity: 1, duration: 1, scale: 0,  ease: "elastic.inOut(1, 0.3)" });
tl8_brndC.fromTo('.brand_8', {  right: "-3%", top: "56%", opacity: 1, duration: 1, scale: 0.8, },
        {  opacity: 1, duration: 1, scale: 0, ease: "elastic.inOut(1, 0.3)" });
tl9_brndC.fromTo('.brand_9', {  right: "6%", top: "75%", opacity: 1, duration: 1, scale: 0.8, },
        {  opacity: 1, duration: 1, scale: 0, ease: "elastic.inOut(1, 0.3)" });
tl10_brndC.fromTo('.brand_10', {  right: "25%", top: "90%", opacity: 1, duration: 1, scale: 0.8, },
        {  opacity: 1, duration: 1, scale: 0, ease: "elastic.inOut(1, 0.3)" });

      
        brandCloseTL.add(tl1_brndC, 2)
                    .add(tl2_brndC, 2.1)
                    .add(tl3_brndC, 2.2)
                    .add(tl4_brndC, 2.3)
                    .add(tl5_brndC, 2.4)
                    .add(tl10_brndC, 2.5)
                    .add(tl9_brndC, 2.6)
                    .add(tl8_brndC, 2.7)
                    .add(tl7_brndC, 2.8)
                    .add(tl6_brndC, 2.9)
                    
                    
                    
                   
             
                    

                    return brandCloseTLL;             

    }



    const animCloseTLL = () => {     
        
        const animCloseTL = gsap.timeline();
     
        const tl1_animC = gsap.timeline();
        const tl2_animC = gsap.timeline();
        const tl3_animC = gsap.timeline();
        const tl4_animC = gsap.timeline();
        const tl5_animC = gsap.timeline();
        const tl6_animC = gsap.timeline();
        const tl7_animC = gsap.timeline();
        const tl8_animC = gsap.timeline();        
        const tl9_animC = gsap.timeline();
        const tl0_animC = gsap.timeline();
        const tl11_animC = gsap.timeline();
        const tl12_animC = gsap.timeline();
    
tl1_animC.fromTo('.anim_1', {  left: "45%", top: "-4%", opacity: 1, duration: 0.5, scale: 0.8, },
        {  opacity: 1, duration: 1, scale: 0, ease: "elastic.inOut(1, 0.7)" });

tl2_animC.fromTo('.anim_2', {  left: "18%", top: "4%", opacity: 1, duration: 1, scale: 0.8, },
        {  opacity: 1, duration: 1, scale: 0, ease: "elastic.inOut(1, 0.7)" });

tl3_animC.fromTo('.anim_3', { delay: 1, left: "2%", top: "21%", opacity: 1, duration: 0.5, scale: 0.8, },
        {  opacity: 1, duration: 1, scale: 0, ease: "elastic.inOut(1, 0.7)" });

tl4_animC.fromTo('.anim_4', {  left: "-4%", top: "45%", opacity: 1, duration: 1, scale: 0.8, },
        {   opacity: 1, duration: 1, scale: 0,  ease: "elastic.inOut(1, 0.3)" });

tl5_animC.fromTo('.anim_5', {  left: "0%", top: "68%", opacity: 1, duration: 0.5, scale: 0.8, },
        { opacity: 1, duration: 1, scale: 0,  ease: "elastic.inOut(1, 0.3)" });

tl6_animC.fromTo('.anim_6', {  left: "16%", top: "85%", opacity: 1, duration: 1, scale: 0.8, },
        {  opacity: 1, duration: 1, scale: 0, ease: "elastic.inOut(1, 0.3)" });



tl7_animC.fromTo('.anim_7', {  right: "18%", top: "4%", opacity: 1, duration: 0.5, scale: 0.8, },
        {  opacity: 1, duration: 0.5, scale: 0,  ease: "elastic.inOut(1, 0.3)" });

tl8_animC.fromTo('.anim_8', {  right: "2%", top: "21%", opacity: 1, duration: 0.5, scale: 0.8, },
        {  opacity: 1, duration: 1, scale: 0,  ease: "elastic.inOut(1, 0.3)" });

tl9_animC.fromTo('.anim_9', {  right: "-4%", top: "45%", opacity: 1, duration: 1, scale: 0.8, },
        {  opacity: 1, duration: 1, scale: 0, ease: "elastic.inOut(1, 0.3)" });

tl0_animC.fromTo('.anim_10', {  right: "0%", top: "68%", opacity: 1, duration: 0.5, scale: 0.8, },
        {   opacity: 1, duration: 1, scale: 0,  ease: "elastic.inOut(1, 0.3)" });

tl11_animC.fromTo('.anim_11', {  right: "16%", top: "85%", opacity: 1, duration: 1, scale: 0.8, },
        {   opacity: 1, duration: 1, scale: 0,  ease: "elastic.inOut(1, 0.3)" }); 

tl12_animC.fromTo('.anim_12', {  right: "45%", top: "96%", opacity: 1, duration: 1, scale: 0.8, },
    {  opacity: 1, duration: 1, scale: 0, ease: "elastic.inOut(1, 0.3)" });

    animCloseTL.add(tl1_animC, 3)
            .add(tl2_animC, 3.1)
            .add(tl3_animC,3.2)
            .add(tl4_animC, 3.3)
            .add(tl5_animC, 3.4)
            .add(tl6_animC, 3.5)

            .add(tl12_animC, 3.6)
            .add(tl11_animC,3.7)
            .add(tl0_animC, 3.8)
            .add(tl9_animC, 3.9)
            .add(tl8_animC, 4.0)
            .add(tl7_animC, 4.1)
           
     return animCloseTLL;

    }

 
    
  const masterCloseMergeTL = gsap.timeline();    

    masterCloseMergeTL.add(devCloseTLL, 1.5)                         
                        .add(devOpenTLL,3.5)
                        .add(animOpenTLL, 2)   
                        .add(brandOpenTLL, 2.0)
                        .add(marketingOpenTLL, 1.0)

    


    const masterOpenMergeTL = gsap.timeline();    

    masterOpenMergeTL.add(devOpenTLL, 0)
                        .add(animOpenTLL, 1) 
                        .add(animOpenTLL, 2)         
  //  .add(marketingOpenTLL,0.5)
   //  .add(brandOpenTLL, 3.0)
   //  .add(animOpenTLL, 5.0)
     .add(masterCloseMergeTL, 5.0)

 

    useEffect(() => {


        ScrollTrigger.create({
            trigger: '#wraperPinSection', // Replace with the ID or class of your trigger element
            start: 'top center',     // This triggers when the middle of the viewport reaches the middle of the trigger element
            end: 'center center',       // You can adjust the 'end' value as needed
            scrub:true,
            animation: masterOpenMergeTL,        // Your master timeline animation
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


   
        // const tlCoverLine = gsap.timeline();
         const tl100 = gsap.timeline();
        // const tlanimsvg1 = gsap.timeline();
        // const tlanimsvg2= gsap.timeline();
         



 

        tl100.fromTo('.coverLine', { scale: 0, duration: 1, opacity: 1, ease: "elastic.Out(1, 0.9)" } ,
          { width: "100vh", height: "100vh", scale: 1.1, duration: 1, ease: "elastic.Out(1, 0.9)" });

        // tlanimsvg1.to('.animSvg', { yPercent: 100, duration: 3, });
        // tlanimsvg2.to('.animSvg', { delay: 5, yPercent: 100, xPercent:-25, duration: 2, });
       
        // tlCoverLine.fromTo('.coverLine',
        // {  scale: 0,  ease: "elastic.Out(1, 0.9)"  },
        //  { width: "100vh", height: "100vh", scale: 1.1, duration: 1, ease: "elastic.Out(1, 0.9)" });

   
  
      
 const LineRotateTLL = () => {             
                const LineRotateTL = gsap.timeline();             
           
                const tlc101 = gsap.timeline();
                const tlc102 = gsap.timeline();
                const tlc103 = gsap.timeline();
                const tlc104 = gsap.timeline();

                tlc101.fromTo('.line_1', { rotate: 0, },
                 { rotate: -360, duration: 30, repeat: -1, ease: "elastic.Out(1, 0.9)",});
                tlc102.fromTo('.line_2', { rotate: 0, }, 
                { rotate: -360, duration: 40, repeat: -1, ease: "elastic.Out(1, 0.9)",});
                tlc103.fromTo('.line_3', { rotate: 0, },
                 { rotate: -360, duration: 50, repeat: -1, ease: "elastic.Out(1, 0.9)",});
                tlc104.fromTo('.line_4', { rotate: 0, }, 
                { rotate: -360, duration: 60, repeat: -1, ease: "elastic.Out(1, 0.9)",});
                         
                LineRotateTL.add(tlline1, 0)
                    .add(tlc102,0)
                    .add(tlc103, 0)
                    .add(tlc104, 0)
                                
             return LineRotateTLL;
        
            } 
        
    const LineExpandTLL = () => {     
        
        const LineExpandTL = gsap.timeline();
     
        const tlline1 = gsap.timeline();
        const tlline2 = gsap.timeline();
        const tlline3 = gsap.timeline();
        const tlline4 = gsap.timeline();
   
        tlline1.to('.line_1', { scale: 1.5, duration: 1, ease: "elastic.Out(1, 0.9)" });
        tlline2.to('.line_2', { scale: 1.4, duration: 1, ease: "elastic.Out(1, 0.9)" });
        tlline3.to('.line_3', { scale: 1.3, duration: 1, ease: "elastic.Out(1, 0.9)" });
        tlline4.to('.line_4', { scale: 1.2, duration: 1, ease: "elastic.Out(1, 0.9)" });

        LineExpandTL.add(tlline1, 0)
            .add(tlline2,0)
            .add(tlline3, 0)
            .add(tlline4, 0)
          
     return LineExpandTLL;

    }



   

    const LineDevExpandTLL = () => {     
        
        const LineDevExpandTL = gsap.timeline( { paused:true,});
     
        const tlline1dev = gsap.timeline();
        const tlline2dev = gsap.timeline();
        const tlline3dev = gsap.timeline();
        const tlline4dev = gsap.timeline();

        const tlline5dev = gsap.timeline();
   
        tlline1dev.fromTo('.line_1', { scale: 1.5, duration: 0.5, ease: "elastic.Out(1, 0.9)" },
         { scale: 0.4, duration: 1, ease: "elastic.Out(1, 0.9)" } );

        tlline2dev.fromTo('.line_2', { scale: 1.4, duration: 1, ease: "elastic.Out(1, 0.9)" } ,
         { scale: 0.4, duration: 1, ease: "elastic.Out(1, 0.9)" }  );

        tlline3dev.fromTo('.line_3', { scale: 1.3, duration: 1.5, ease: "elastic.Out(1, 0.9)" } , 
        { scale: 0.4, duration: 1, ease: "elastic.Out(1, 0.9)" }  );

        tlline4dev.fromTo('.line_4', { scale: 1.2, duration: 2, ease: "elastic.Out(1, 0.9)" } ,
         { scale: 0.4, duration: 1, ease: "elastic.Out(1, 0.9)" }  );


        tlline5dev.fromTo('.line_4',  {  scale: 0.2, duration: 2,  } , 
        { delay:0,  scale: 1.3, duration: 2.5,  ease: "bounce.out" , },);

        LineDevExpandTL.add(tlline4dev, 0.5)
            .add(tlline3dev,0.75)
            .add(tlline2dev, 1.00)
            .add(tlline1dev, 1.25)
           .add(tlline5dev, 1.50)



           const timeline = LineDevExpandTL;
           const resetTimelineDev = () => {
               timeline.pause(0);
           };
           return {
                timeline,
                resetTimeline: resetTimelineDev,
            };
 
    }

    const devButton = document.getElementById('devButton');
const { timeline: lineDevExpandTLL, resetTimeline: resetDevTimeline } = LineDevExpandTLL();

    
if (devButton) {
        devButton.addEventListener('click', () => {
            resetDevTimeline(); // Reset the timeline before playing
            lineDevExpandTLL.play();
    
            setTimeout(() => {
                resetDevTimeline();
            }, 10000);
        });
    }

//     if (devButton) {
//         devButton.addEventListener('click', () => {
//             const currentTimestamp = Date.now();

//             // Check if it's been more than 10 seconds since the last click
//             if (currentTimestamp - lastClickTimestamp > 10000) {
//                 resetDevTimeline(); // Reset the timeline before playing
//             }

//             lineDevExpandTLL.play();

//             // Update the last click timestamp
//             lastClickTimestamp = currentTimestamp;

//             setTimeout(() => {
//                 resetDevTimeline();
//             }, 10000);
//         });
//     }

 
    
    const LineAnimExpandTLL = () => {     
        
        const LineAnimExpandTL = gsap.timeline( { paused:true,});
     
        const tlline1anim = gsap.timeline();
        const tlline2anim = gsap.timeline();
        const tlline3anim = gsap.timeline();
        const tlline4anim = gsap.timeline();

        const tlline5anim = gsap.timeline();
   
        tlline1anim.fromTo('.line_1', { scale: 1.5, duration: 0.5, ease: "elastic.Out(1, 0.9)" },
         { scale: 0.4, duration: 1, ease: "elastic.Out(1, 0.9)" } );

         tlline2anim.fromTo('.line_2', { scale: 1.4, duration: 1, ease: "elastic.Out(1, 0.9)" } ,
         { scale: 0.4, duration: 1, ease: "elastic.Out(1, 0.9)" }  );

         tlline3anim.fromTo('.line_3', { scale: 1.3, duration: 1.5, ease: "elastic.Out(1, 0.9)" } , 
        { scale: 0.4, duration: 1, ease: "elastic.Out(1, 0.9)" }  );

        tlline4anim.fromTo('.line_4', { scale: 1.2, duration: 2, ease: "elastic.Out(1, 0.9)" } ,
         { scale: 0.4, duration: 1, ease: "elastic.Out(1, 0.9)" }  );


         tlline5anim.fromTo('.line_3',  {  scale: 0.2, duration: 2,  } , 
        { delay:0,  scale: 1.4, duration: 2.5,  ease: "bounce.out" , },);

        LineAnimExpandTL.add(tlline4anim, 0.5)
            .add(tlline3anim,0.75)
            .add(tlline2anim, 1.00)
            .add(tlline1anim, 1.25)
           .add(tlline5anim, 1.50)



           const timeline = LineAnimExpandTL;
           const resetTimelineAnim = () => {
               timeline.pause(0);
           };
       
           return {
               timeline,
               resetTimeline: resetTimelineAnim,
           };

         //   return LineAnimExpandTL;
 
    }

        const digiButton = document.getElementById('digiButton');
        const { timeline: lineAnimExpandTLL, resetTimeline: resetAnimTimeline } = LineAnimExpandTLL();

        if (digiButton) {
        digiButton.addEventListener('click', () => {
                resetAnimTimeline(); // Reset the timeline before playing
                lineAnimExpandTLL.play();

                setTimeout(() => {
                resetAnimTimeline();
                }, 10000);
        });
        }

        // if (digiButton) {
        //         devButton.addEventListener('click', () => {
        //             const currentTimestamp = Date.now();
        
        //             // Check if it's been more than 10 seconds since the last click
        //             if (currentTimestamp - lastClickTimestamp > 10000) {
        //                 resetAnimTimeline(); // Reset the timeline before playing
        //             }
        
        //             lineDevExpandTLL.play();
        
        //             // Update the last click timestamp
        //             lastClickTimestamp = currentTimestamp;
        
        //             setTimeout(() => {
        //                 resetAnimTimeline();
        //             }, 10000);
        //         });
        //     }
        

    const MarketingRotateTLL = () => {     

        const MarketingRotateTL = gsap.timeline();

       const tl1mr = gsap.timeline();
        const tl2mr = gsap.timeline();
        const tl3mr = gsap.timeline();
        const tl4mr = gsap.timeline();
        const tl5mr = gsap.timeline();
        const tl6mr = gsap.timeline();
        const tl7mr = gsap.timeline();
        const tl8mr = gsap.timeline();
        const tl9mr = gsap.timeline();
        const tl10mr = gsap.timeline();
       
        MarketingRotateTL.add(tl1mr, 1)
               
            .add(tl2mr, 1)
            .add(tl3mr, 1)
            .add(tl4mr, 1)
            .add(tl5mr, 1)
            .add(tl6mr, 1)
            .add(tl7mr, 1)
            .add(tl8mr, 1)
            .add(tl9mr, 1)
            .add(tl10mr, 1)
       
        tl1mr.fromTo('.mark_1', { rotate: 0, }, 
        { rotate: 360, duration: 30, repeat: -1, ease: "elastic.Out(1, 0.9)",});
        tl2mr.fromTo('.mark_2', { rotate: 0, }, 
        { rotate: 360, duration: 30, repeat: -1, ease: "elastic.Out(1, 0.9)",});
        tl3mr.fromTo('.mark_3', { rotate: 0, }, 
        { rotate: 360, duration: 30, repeat: -1, ease: "elastic.Out(1, 0.9)",});
        tl4mr.fromTo('.mark_4', { rotate: 0, }, 
        { rotate: 360, duration: 30, repeat: -1, ease: "elastic.Out(1, 0.9)",});
        tl5mr.fromTo('.mark_5', { rotate: 0, }, 
        { rotate: 360, duration: 30, repeat: -1, ease: "elastic.Out(1, 0.9)",});
        tl6mr.fromTo('.mark_6', { rotate: 0, }, 
        { rotate: 360, duration: 30, repeat: -1, ease: "elastic.Out(1, 0.9)",});
        tl7mr.fromTo('.mark_7', { rotate: 0, }, 
        { rotate: 360, duration: 30, repeat: -1, ease: "elastic.Out(1, 0.9)",});
        tl8mr.fromTo('.mark_8', { rotate: 0, }, 
        { rotate: 360, duration: 30, repeat: -1, ease: "elastic.Out(1, 0.9)",});
        tl9mr.fromTo('.mark_9', { rotate: 0, }, 
        { rotate: 360, duration: 30, repeat: -1, ease: "elastic.Out(1, 0.9)",});
        tl10mr.fromTo('.mark_10', { rotate: 0, }, 
        { rotate: 360, duration: 30, repeat: -1, ease: "elastic.Out(1, 0.9)",});
  
     return MarketingRotateTL;

}
 

    const AnimRotateTLL = () => {     
        
        const AnimRotateTL = gsap.timeline();
     
 
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


        AnimRotateTL .add(tl1an, 1)          
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


        tl1an.fromTo('.anim_1', { rotate: 0, }, 
        { rotate: 360, duration: 40, repeat: -1, ease: "elastic.Out(1, 0.9)", });        
        tl2an.fromTo('.anim_2', { rotate: 0, }, 
        { rotate: 360, duration: 40, repeat: -1, ease: "elastic.Out(1, 0.9)",});
        tl3an.fromTo('.anim_3', { rotate: 0, }, 
        { rotate: 360, duration: 40, repeat: -1, ease: "elastic.Out(1, 0.9)", });
        tl4an.fromTo('.anim_4', { rotate: 0, }, 
        { rotate: 360, duration: 40, repeat: -1, ease: "elastic.Out(1, 0.9)",  });
        tl5an.fromTo('.anim_5', { rotate: 0, }, 
        { rotate: 360, duration: 40, repeat: -1, ease: "elastic.Out(1, 0.9)",  });
        tl6an.fromTo('.anim_6', { rotate: 0, }, 
        { rotate: 360, duration: 40, repeat: -1, ease: "elastic.Out(1, 0.9)", });
        tl7an.fromTo('.anim_7', { rotate: 0, }, 
        { rotate: 360, duration: 40, repeat: -1, ease: "elastic.Out(1, 0.9)", });
        tl8an.fromTo('.anim_8', { rotate: 0, }, 
        { rotate: 360, duration: 40, repeat: -1, ease: "elastic.Out(1, 0.9)",  });
        tl9an.fromTo('.anim_9', { rotate: 0, }, 
        { rotate: 360, duration: 40, repeat: -1, ease: "elastic.Out(1, 0.9)",  });
        tl10an.fromTo('.anim_10', { rotate: 0, }, 
        { rotate: 360, duration: 40, repeat: -1, ease: "elastic.Out(1, 0.9)",  });       
        tl11an.fromTo('.anim_11', { rotate: 0, }, 
        { rotate: 360, duration: 40, repeat: -1, ease: "elastic.Out(1, 0.9)",});
        tl12an.fromTo('.anim_12', { rotate: 0, }, 
        { rotate: 360, duration: 40, repeat: -1, ease: "elastic.Out(1, 0.9)",});


        return AnimRotateTL;

}
 

const BrandRotateTLL = () => {     
        
        const BrandRotateTL = gsap.timeline();

        const tl1br = gsap.timeline();
        const tl2br = gsap.timeline();
        const tl3br = gsap.timeline();
        const tl4br = gsap.timeline();
        const tl5br = gsap.timeline();
        const tl6br = gsap.timeline();
        const tl7br = gsap.timeline();
        const tl8br = gsap.timeline();
        const tl9br = gsap.timeline();
        const tl10br = gsap.timeline();

        BrandRotateTL .add(tl1br, 1)
            .add(tl2br, 1)
            .add(tl3br, 1)
            .add(tl4br, 1)
            .add(tl5br, 1)
            .add(tl6br, 1)
            .add(tl7br, 1)
            .add(tl8br, 1)
            .add(tl9br, 1)
            .add(tl10br, 1)
            

        tl1br.fromTo('.brand_1', { rotate: 0, }, 
        { rotate: 360, duration: 500, repeat: -1, ease: "elastic.Out(1, 0.9)",});
        tl2br.fromTo('.brand_2', { rotate: 0, }, 
        { rotate: 360, duration: 50, repeat: -1, ease: "elastic.Out(1, 0.9)",});
        tl3br.fromTo('.brand_3', { rotate: 0, }, 
        { rotate: 360, duration: 50, repeat: -1, ease: "elastic.Out(1, 0.9)",});
        tl4br.fromTo('.brand_4', { rotate: 0, }, 
        { rotate: 360, duration: 50, repeat: -1, ease: "elastic.Out(1, 0.9)",});
        tl5br.fromTo('.brand_5', { rotate: 0, }, 
        { rotate: 360, duration: 50, repeat: -1, ease: "elastic.Out(1, 0.9)",});
        tl6br.fromTo('.brand_6', { rotate: 0, }, 
        { rotate: 360, duration: 50, repeat: -1, ease: "elastic.Out(1, 0.9)",});
        tl7br.fromTo('.brand_7', { rotate: 0, }, 
        { rotate: 360, duration: 50, repeat: -1, ease: "elastic.Out(1, 0.9)",});
        tl8br.fromTo('.brand_8', { rotate: 0, }, 
        { rotate: 360, duration: 50, repeat: -1, ease: "elastic.Out(1, 0.9)",});
        tl9br.fromTo('.brand_9', { rotate: 0, }, 
        { rotate: 360, duration: 50, repeat: -1, ease: "elastic.Out(1, 0.9)",});
        tl10br.fromTo('.brand_10', { rotate: 0, }, 
        { rotate: 360, duration: 50, repeat: -1, ease: "elastic.Out(1, 0.9)",});
 

     return BrandRotateTL;

}
 

const devRotateTLL = () => {     
        
        const devRotateTL = gsap.timeline();
     
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
    
 

    devRotateTL.add(tl1dv, 0)
            .add(tl2dv, 0)
            .add(tl3dv,0)
            .add(tl4dv, 0)
            .add(tl5dv, 0)
            .add(tl6dv, 0)

            .add(tl7dv, 0)
            .add(tl8dv, 0)
            .add(tl9dv, 0)
            .add(tl10dv, 0)
            .add(tl11dv, 0)
            .add(tl12dv, 0)

            tl1dv.fromTo('.dev_1', { rotate: 0, }, 
            { rotate: 360, duration: 60, repeat: -1, ease: "elastic.Out(1, 0.9)",});
            tl2dv.fromTo('.dev_2', { rotate: 0, }, 
            { rotate: 360, duration: 60, repeat: -1, ease: "elastic.Out(1, 0.9)",});
            tl3dv.fromTo('.dev_3', { rotate: 0, }, 
            { rotate: 360, duration: 60, repeat: -1, ease: "elastic.Out(1, 0.9)",});
            tl4dv.fromTo('.dev_4', { rotate: 0, }, 
            { rotate: 360, duration: 60, repeat: -1, ease: "elastic.Out(1, 0.9)",});
            tl5dv.fromTo('.dev_5', { rotate: 0, }, 
            { rotate: 360, duration: 60, repeat: -1, ease: "elastic.Out(1, 0.9)",});
            tl6dv.fromTo('.dev_6', { rotate: 0, }, 
            { rotate: 360, duration: 60, repeat: -1, ease: "elastic.Out(1, 0.9)",});
            tl7dv.fromTo('.dev_7', { rotate: 0, }, 
            { rotate: 360, duration: 60, repeat: -1, ease: "elastic.Out(1, 0.9)",});
            tl8dv.fromTo('.dev_8', { rotate: 0, }, 
            { rotate: 360, duration: 60, repeat: -1, ease: "elastic.Out(1, 0.9)",});
            tl9dv.fromTo('.dev_9', { rotate: 0, }, 
            { rotate: 360, duration: 60, repeat: -1, ease: "elastic.Out(1, 0.9)",});
            tl10dv.fromTo('.dev_10', { rotate: 0, }, 
            { rotate: 360, duration: 60, repeat: -1, ease: "elastic.Out(1, 0.9)",});
            tl11dv.fromTo('.dev_11', { rotate: 0, }, 
            { rotate: 360, duration: 60, repeat: -1, ease: "elastic.Out(1, 0.9)",});
            tl12dv.fromTo('.dev_12', { rotate: 0, }, 
            { rotate: 360, duration: 60, repeat: -1, ease: "elastic.Out(1, 0.9)",});
    


     return devRotateTL;

    }




        masterTL.add(LineExpandTLL, 3) 
                .add(devRotateTLL, 0)
               .add(LineRotateTLL, 0)
                .add(AnimRotateTLL, 0)
                .add(BrandRotateTLL, 0)
                .add(MarketingRotateTLL, 0)
               
                .add(tl100, 0)
                 
            

        ScrollTrigger.create({
            trigger: '#coverLine', // Replace with the ID or class of your trigger element
            start: 'top bottom',     // This triggers when the middle of the viewport reaches the middle of the trigger element
            end: '+=2500',      // You can adjust the 'end' value as needed 
            markers: true,
            duration: 3,            // Add markers for debugging (remove this in production)
            animation: masterTL,
       
            toggleActions: "play pause resume reverse",

        });

      

        // return () => {
        //     // Cleanup ScrollTriggers
        //     ScrollTrigger.getAll().forEach((trigger) => {
        //         trigger.kill();
        //     });
        // };
   



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
                        <div className='pt-10' id='wraperPinSection'  >
                            {/* <div className='animSvg' data-speed="1.5" >
                                <WorksSvg />
                            </div> */}
                            {/* <div className="cloude3" data-speed="1.5"><img src='./clouds2.png' ></img></div> */}
                            <div className='coverLine' id='coverLine'  >
                                <div className='line_0'></div>
                                <div className='line_1'>
                                <div className="mark_1"><img src="degi_1.svg" /></div>
                                    <div className="mark_2"><img src="degi_2.svg" /></div>
                                    <div className="mark_3"><img src="degi_3.svg" /></div>
                                    <div className="mark_4"><img src="degi_4.svg" /></div>
                                    <div className="mark_5"><img src="degi_5.svg" /></div>
                                    <div className="mark_6"><img src="degi_6.svg" /></div>
                                    <div className="mark_7"><img src="degi_5.svg" /></div>
                                    <div className="mark_8"><img src="degi_6.svg" /></div>
                                    <div className="mark_9"><img src="degi_5.svg" /></div>
                                    <div className="mark_10"><img src="degi_6.svg" /></div>
 
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
                                    <div className="anim_10"><img src="anim10.svg" /></div>
                                    <div className="anim_11"><img src="anim11.svg" /></div>
                                    <div className="anim_12"><img src="anim12.svg" /></div>
                                    
                                </div>
                                <div className='line_3'> 

                                    <div className="brand_1"><img src="brand_1.svg" /></div>
                                    <div className="brand_2"><img src="brand_2.svg" /></div>
                                    <div className="brand_3"><img src="brand_3.svg" /></div>
                                    <div className="brand_4"><img src="brand_4.svg" /></div>
                                    <div className="brand_5"><img src="brand_5.svg" /></div>
                                    <div className="brand_6"><img src="brand_6.svg" /></div>
                                    <div className="brand_7"><img src="brand-7.svg" /></div>
                                    <div className="brand_8"><img src="brand-8.svg" /></div>
                                    <div className="brand_9"><img src="brand-9.svg" /></div>
                                    <div className="brand_10"><img src="brand-10.svg" /></div>
                                </div>
                                <div className='line_4'>

                                    
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
                      
                                <div className='top_line_srvc' >
                                    <h1 className='design'  id='devButton'>Web & Mobile Application  </h1>
                                    <h2 className='application' id='digiButton'>Digital Marketing</h2>                                
                                    <h4 className='marketing' id='brandingButton'> Branding & Designing</h4>
                                    <h3 className='animaaton' id='animButton'>2D & 3D Animation</h3>
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
