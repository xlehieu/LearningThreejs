"use client"
import React from 'react'
import {useGSAP} from '@gsap/react'
import gsap from 'gsap'
const GsapFromTo = () => {
    useGSAP(()=>{
      //amber : hổ phách =)))
        gsap.fromTo("#amber-box",{
          x:-250,
          rotation:360,
          borderRadius:"0%"
        },{
            x:250,
            duration:2,
            repeat:-1,
            yoyo:true,
            borderRadius:"100%",
            ease:"bounce.out"
        })
    },[])
  return (
    <div>
      <div id='amber-box' className='bg-amber-600 h-30 w-30'>

      </div>
    </div>
  )
}

export default GsapFromTo
