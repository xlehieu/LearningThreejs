'use client';
import React from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
const GsapStagger = () => {
    useGSAP(() => {
        gsap.to('.box', {
            y: 250,
            rotation: 360,
            borderRadius: '100%',
            repeat: -1,
            yoyo: true,
            stagger: {
                each: 0.2,
                amount: 1.5, //tổng thời gian của stagger
                grid: [3, 1],
                from: 'end',
                // form cũng có thể dùng hàm from(index) {
                //   return Math.abs(index - centerIndex);
                // }
                // onComplete: () => {
                //     alert('stagger complete');
                // },
            },
        });
        //stagger có thể bắt nhiều class cùng làm 1 việc
        // nhưng stagger có thêm 1 số option
        // stagger: {
        //     each: 0.2,
        //     from: 'start',
        //     onComplete: () => {
        //         console.log('stagger complete');
        //     },
        // }
    }, []);
    return (
        <div className="grid grid-cols-3 gap-4">
            <div className="box bg-pink-500 h-20 w-20"></div>
            <div className="box bg-pink-500 h-20 w-20"></div>
            <div className="box bg-pink-500 h-20 w-20"></div>
            <div className="box bg-pink-500 h-20 w-20"></div>
            <div className="box bg-pink-500 h-20 w-20"></div>
            <div className="box bg-pink-500 h-20 w-20"></div>
            <div className="box bg-pink-500 h-20 w-20"></div>
            <div className="box bg-pink-500 h-20 w-20"></div>
            <div className="box bg-pink-500 h-20 w-20"></div>
        </div>
    );
};

export default GsapStagger;
