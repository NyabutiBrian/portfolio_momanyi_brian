import React, { useEffect, useRef } from 'react';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useGSAP } from "@gsap/react";

import Navbar from '../components/Navbar';
import { Timeline } from 'gsap/gsap-core';

gsap.registerPlugin(ScrollTrigger)

function Landing() {

    useEffect(() => {
      window.scrollTo(0, 0);
    }, []);

    // defining timeline
    const timeline = gsap.timeline({});
    const scrollRef = useRef();

    useGSAP (() => {
      // to
      gsap.to('#box-one', {
        x: 500,
        // repeat: -1,
        // yoyo: true,
        duration: 4,
        rotation: 360,
        borderRadius: '100%',
        ease: 'sine',
      }),

      // from
      gsap.from('#box-two', {
        x: 500,
        // repeat: -1,
        // yoyo: true,
        duration: 4,
        rotation: 360,
        borderRadius: '100%',
        ease: 'sine',
      }),

      // fromTo
      gsap.fromTo('#box-three',{
        x: 0,
        rotation: 0,
        borderRadius: '10%'
      }, {
        x: 500,
        // repeat: -1,
        // yoyo: true,
        duration: 4,
        rotation: 360,
        borderRadius: '100%',
        ease: 'elastic.inOut',
      }),

      // timeline
      timeline.to('#box-four',{
        x: 250,
        duration: 2,
        rotation: 360,
        borderRadius: '100%',
        ease: 'back.in',
      });

      timeline.to('#box-four',{
        y: 300,
        duration: 1,
        scale: 2,
        rotation: 360,
        borderRadius: '10%',
        ease: 'bounce',
      });

      timeline.to('#box-four',{
        y: 0,
        duration: 1,
        scale: 1,
        rotation: 360,
        borderRadius: '10%',
        ease: 'bounce',
      });

      timeline.to('#box-four',{
        x: 500,
        duration: 2,
        rotation: 360,
        borderRadius: '100%',
        ease: 'back.out',
      });

      // scrollTrigger
      const boxes = gsap.utils.toArray(scrollRef.current.children);

      boxes.forEach((box) => {
        gsap.to(box, {
          x:500,
          rotation: 360,
          borderRadius: '100%',
          ease: 'back.in',
          scrollTrigger: {
            trigger: box,
            start: 'bottom bottom',
            end: 'top 20%',
            scrub: true,
          }
        })
      })
    }, []);

  return (
    <>
        {/* < Navbar /> */}
        
        <div className='p-10'>
          <h3>to</h3>
          <div id='box-one' className='bg-white rounded-lg w-20 h-20'></div>
        </div>

        <div className='p-10'>
          <h3>from</h3>
          <div id='box-two' className='bg-white rounded-lg w-20 h-20'></div>
        </div>

        <div className='p-10'>
          <h3>fromTo</h3>
          <div id='box-three' className='bg-white rounded-lg w-20 h-20'></div>
        </div>

        <div className='p-10'>
          <h3>timeline</h3>
          <div id='box-four' className='bg-white rounded-lg w-20 h-20'></div>
        </div>

        <div className='p-10'>
          <h3>scrollTrigger</h3>
          <div ref={scrollRef}>
            <div id='box-five' className='bg-white rounded-lg w-20 h-20'></div>

              <div id='box-five' className='bg-primary rounded-lg w-20 h-20'></div>
          </div>
        </div>

        <div>
          <h1 className='py-40'>Next Page</h1>
        </div>
        <div>
          <h1 className='py-40'>Next Page</h1>
        </div>
    </>
  )
}

export default Landing