import {gsap} from 'gsap'
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import { useSmoothScroll } from '../../hooks/useSmoothScroll';

gsap.registerPlugin(ScrollTrigger);
// 
function Layout({children}  : {children: React.ReactNode}) {
   useSmoothScroll()
  return (
    <main>
    <div  className='mx-[10px] md:mx-[70px] '>{children}</div>
  </main>
  )
}

export default Layout