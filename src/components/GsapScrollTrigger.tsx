'use client';
import React, { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
gsap.registerPlugin(ScrollTrigger);
const GsapScrollTrigger = () => {
    const scrollRef = useRef<HTMLDivElement>(null);
    useGSAP(() => {
        const balls = gsap.utils.toArray(scrollRef?.current?.children ? scrollRef?.current?.children : []);
        balls.forEach((ball, index) => {
            
        })
    }, []);
    
    return (
        <div>
            <div id="blue-box" className="bg-blue-700 h-30 w-30"></div>
            <div className="h-svh"></div>
            <div className="bg-amber-200" ref={scrollRef}>
                <div className="ball-red bg-red-950 rounded-full"></div>
                <div className="ball-red bg-red-950 rounded-full"></div>
            </div>
        </div>
    );
};

export default GsapScrollTrigger;
