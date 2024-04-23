import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { MorphSVGPlugin } from 'gsap/dist/MorphSVGPlugin';

gsap.registerPlugin(ScrollTrigger, MorphSVGPlugin);

export default function BottomSVG() {
  useEffect(() => {
    const tl = gsap.timeline( );
    const tl1 = gsap.timeline({
      defaults: { duration: 2, opacity: 1,   },
    });
    const lowBox = document.getElementById('lowBox');
    const highBox = document.getElementById('highBox');

    

    tl.fromTo(lowBox, { morphSVG: '#highBox', opacity:1, skewY:60,    }, { morphSVG: '#lowBox' , opacity:1, skewY:0,   duration:2, ease: "elastic.inOut(1, 0.3)" }, 1);
    tl1.fromTo(".svg1", { yPercent:90,}, { yPercent: -20, duration:0.5} );

    const masterTL = gsap.timeline();    

    masterTL.add(tl,0)
    .add(tl1,1)  


    ScrollTrigger.create({
      trigger: '#starSvgTigger',
      start: 'top 30%',
      end: '+=3000', 
      // scrub: true,
      pin: true,
      animation: masterTL,
      toggleActions: 'play pause resume reset',
      markers: true,
      pinSpacing:true,
    });
  }, []);

  return (

      <div  id="starSvgTigger">
        <div className='SvgCoveringBg'>
     <div className="pt-10" >
      <div className="svg1">
        <svg width="80%" height="1000" viewBox="0 0 800 1000" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path id="lowBox" d="M0 64.0015C0 52.9558 8.95431 44.0015 20 44.0015C405.795 -14.8529 615.488 -14.468 980 44.0015C991.046 44.0015 1000 52.9558 1000 64.0015V1067C1000 1078.05 991.046 1087 980 1087H20C8.95429 1087 0 1078.05 0 1067V64.0015Z" fill="#D9D9D9" />
          <path id="highBox" d="M77.1287 207.58C-116.87 -79.4213 95.1382 19.4836 273.132 71.5802C451.125 123.677 458.128 145.58 656.128 89.5782C854.128 33.5764 1116.13 -129.025 889.129 207.58C662.13 544.185 889.129 616.183 889.129 616.183C889.129 627.229 880.174 636.183 869.128 636.183C869.128 636.183 791.129 587.183 517.129 581.183C243.129 575.183 130.129 630.183 130.129 630.183C130.129 630.183 110.129 621.229 110.129 610.183C110.129 610.183 271.127 494.582 77.1287 207.58Z" fill="#D9D9D9" />
        </svg>
      </div>
      </div>
    </div>
    </div>
  );
}
 
 