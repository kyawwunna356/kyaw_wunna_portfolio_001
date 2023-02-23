import Lenis from '@studio-freight/lenis'
import Link from 'next/link'
import React, { useEffect, useRef, useState } from 'react'

function StickNav() {
  const [lenis,setLenis] : any = useState(null)
  useEffect(() => {
    const temp = new Lenis()
    setLenis(temp)
  },[])
  return (
    <div className='fixed top-10 left-5 md:left-10 right-5 font-gruppo flex md:flex-col flex-row justify-between md:text-lg bg-transparent z-50 md:z-0 backdrop-blur-lg md:backdrop-blur-0 '>
        <Link href='#about' onClick={() => lenis?.scrollTo('#about')} className='hover:text-orange-600 cursor-pointer'>About me</Link>
        <Link href='#skill' onClick={() => lenis?.scrollTo('#skill')} className='hover:text-orange-600 cursor-pointer'>Skills</Link>
        <Link href='#project' onClick={() => lenis?.scrollTo('#project')} className='hover:text-orange-600 cursor-pointer'>Projects</Link>
        <Link href='#contact' onClick={() => lenis?.scrollTo('#contact')} className='hover:text-orange-600 cursor-pointer'>Contact Info</Link>
    </div>
  )
}

export default StickNav