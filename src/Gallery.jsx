 
import gsap from 'gsap';
 
import { MorphSVGPlugin } from "gsap/dist/MorphSVGPlugin";
import { MotionPathPlugin } from "gsap/dist/MotionPathPlugin";
 

 
import './App.css'
 

const CylinderGallery = () => {

  
    gsap.registerPlugin(MotionPathPlugin);
 

    const tl = gsap.timeline();

// Define control points for the Bezier curve
const controlPoints = [{ x: 0, y: 0 }, { x: 0.2, y: 1 }, { x: 0.8, y: 1 }, { x: 1, y: 1 }];

// Use bezierThrough to create a Bezier curve
tl.to('.element', {
  duration: 1,
  x: 500,
  ease: BezierPlugin.bezierThrough(controlPoints),
});

// Add more animations to the timeline
// ...

// Start the timeline
tl.play();

    gsap.to("#two", {
      duration: 10, 
      repeat:-1,      
      yoyo: true,
      ease: "power1.inOut",
      motionPath:{
        path: "#path",
        align: "#path",
        autoRotate: true,
        alignOrigin: [0.5, 0.5]
      }
    });



  return (
    <div>
      
      <svg width="100%" height="100%" viewBox="-20 0 557 190" id="svg">
  <circle cx="100" cy="100" r="3" />
  <circle cx="300" cy="20" r="3" />
  <path id="path"  fill-rule="evenodd" clip-rule="evenodd" d="M179.5 358.44C278.326 358.44 358.44 278.326 358.44 179.5C358.44 80.6742 278.326 0.560062 179.5 0.560062C80.6742 0.560062 0.560062 80.6742 0.560062 179.5C0.560062 278.326 80.6742 358.44 179.5 358.44ZM179.5 359C278.635 359 359 278.635 359 179.5C359 80.3649 278.635 0 179.5 0C80.3649 0 0 80.3649 0 179.5C0 278.635 80.3649 359 179.5 359Z"/>
  {/* <g id="rect">
    <rect width="85" height="30" fill="dodgerblue" />
    <text x="10" y="19" font-size="14">SVG &lt;rect&gt;</text>
  </g> */}

 
        <g id="rect"> 
            <rect x="30" y="70" width="80" 
                height="80" fill="green"></rect> 
        </g> 
        <g id="two" className='element'> 
            <rect x="60" y="110" width="80" 
                height="80" fill="grey"></rect> 
        </g> 
        <g id="three"> 
            <rect x="90" y="150" width="80" 
                height="80" fill="black"></rect> 
        </g> 
        <text x="10" y="19" font-size="14">SVG &lt;rect&gt;</text>
 

</svg>

<div id="div">#div</div>

    </div>
  );
};

export default CylinderGallery;




 