'use client';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/all';
gsap.registerPlugin(useGSAP, ScrollTrigger);

const Hero = () => {
    useGSAP(() => {
        const introTimeline = gsap.timeline();
        introTimeline
            .set('.hero', {
                opacity: 1,
            })
            .from('.hero-header-word', {
                scale: 3,
                opacity: 0,
                ease: 'power1.in',
                stagger: 0.4, // từng phần tử sau mỗi 0.4s
                delay: 0.3,
            });
        const scrollTimeline = gsap.timeline({
            scrollTrigger: {
                start: 'top top',
                end: 'bottom bottom',
                scrub: 1,
            },
        });
        scrollTimeline
            .fromTo(
                'body',
                {
                    backgroundColor: '#FDE047',
                },
                {
                    backgroundColor: '#D9F99D',
                    overwrite: 'auto',
                },
                1,
            )
            .from('.text-age', {
                scale: 1.5,
                y: 40,
                rotate: -25,
                opacity: 0,
                ease: 'back.out(3)',
                stagger: 0.5,
                duration: 30,
            });
    });
    return (
        <div className="hero text-4xl w-full font-bold text-amber-600 mt-2 text-center">
            <div className="h-[500px]">
                <h1 className="hero-header-word">LE</h1>
                <h1 className="hero-header-word">XUAN HIEU</h1>
            </div>
            <div className="text-age h-[500px]">
                <h1 className="hero-header-word">I am</h1>
                <h1 className="hero-header-word">22 years old</h1>
            </div>
        </div>
    );
};
export default Hero;
