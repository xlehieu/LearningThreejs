"use client"
import React from 'react'
import {useGSAP} from '@gsap/react'
import gsap from 'gsap'
const GsapTimeline = () => {
  const timeline = gsap.timeline({
    repeat:-1,
    yoyo:true,
    repeatDelay:1//chờ 1 giây rồi lặp lại
  })
    useGSAP(()=>{
      //amber : hổ phách =)))
        timeline.to("#red-box",{
          x:250,
          rotation:360,
          borderRadius:"100%",
          duration:2,
          ease:"back.inOut",
          backgroundColor:"yellow"
        })
        timeline.to("#red-box",{
          y:250,
          scale:2,
          backgroundColor:"pink",
          ease:"back.inOut",
          borderRadius:"50%",
          duration:2
        })
        timeline.to("#red-box",{
          x:500,
          duration:2,
          scale:1,
          borderRadius:"8px",
          backgroundColor:"red",
          ease:"bounce.out"
      })
    },[])
  return (
    <div>
      {/* timeline không phải là 1 state nên không thay đổi được màu nha =))) */}
      <button className={`${timeline.paused()? "bg-green-500":"bg-red-500"} px-2 py-1 rounded text-white`} onClick={()=>{
        if(timeline.paused()){
          timeline.play()
        }else{
          timeline.pause()
        }
      }}>
        {timeline.paused() ? "PLAY":"PAUSE"}
      </button>
      <div id='red-box' className='bg-red-600 h-30 w-30'>

      </div>
    </div>
  )
}

export default GsapTimeline
