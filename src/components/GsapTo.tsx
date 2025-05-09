"use client"
import React from 'react'
import {useGSAP} from '@gsap/react'
import gsap from 'gsap'
const GsapTo = () => {
    useGSAP(()=>{
        gsap.to("#blue-box",{
            x:250,
            duration:2,
            repeat:-1,
            yoyo:true,
            rotate:360
        })
    },[])
  return (
    <div>
      <div id='blue-box' className='bg-blue-700 h-30 w-30'>

      </div>
    </div>
  )
}

export default GsapTo
