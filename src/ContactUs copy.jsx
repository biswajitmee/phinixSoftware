import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { MorphSVGPlugin } from 'gsap/dist/MorphSVGPlugin';

gsap.registerPlugin(ScrollTrigger, MorphSVGPlugin);

export default function ContactUs() {
  useEffect(() => {
    const tl = gsap.timeline({
      defaults: { duration: 1, opacity: 1,   },
    });

    const lowBox = document.getElementById('lowBox');
    const highBox = document.getElementById('highBox');



    tl.fromTo(lowBox, { morphSVG: '#highBox' }, { morphSVG: '#lowBox' }, 1);

    ScrollTrigger.create({
      trigger: '#starSvgTigger',
      start: 'center center',
      end: '+=1000',
      //scrub: true,
      pin: true,
      animation: tl,
      toggleActions: 'play pause resume reset',
      markers: true,
    });
  }, []);

  return (
    <div className="container mx-auto pt-10" id="starSvgTigger">
      <div className="svg1">
        <svg width="70%" height="400" viewBox="0 0 400 300" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path id="lowBox" d="M0 33C0 14.7746 14.7746 0 33 0C33 0 362.5 24 745.5 22.5C1128.5 21 1459 0 1459 0C1477.23 0 1492 14.7746 1492 33V610C1492 628.225 1477.23 643 1459 643H33C14.7746 643 0 628.225 0 610V33Z" fill="#D9D9D9" />
          <path id="highBox" d="M0.00860107 406.287C-0.915054 369.584 72.8072 346.767 98.7605 372.736C187.311 461.341 341.803 541.73 578.5 490.5C922.65 416.014 1300.24 125.43 1440.82 7.87471C1462.78 -10.4862 1496.95 5.33301 1496.95 33.9554V569.526C1496.95 587.752 1482.17 602.526 1463.95 602.526H37.127C19.225 602.526 4.58788 588.253 4.13751 570.357L0.00860107 406.287Z" fill="#D9D9D9" />
        </svg>
      </div>
    </div>
  );
}
