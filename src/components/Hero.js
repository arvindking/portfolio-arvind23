import { ArrowsRightLeftIcon } from '@heroicons/react/24/solid'
import { AiOutlineInstagram, AiOutlineFacebook, AiOutlineLinkedin } from "react-icons/ai";
import Heroimg from '../assets/hero.png'
import { BsArrowRightSquareFill } from 'react-icons/bs';
export default function Hero(){
    return <section className='flex px-5 py-20 bg-secondary justify-center'>
       <div className='w-1/2 flex-col'>
       <h1 className='w-1/2 text-white text-5xl font-hero-font'>Hi,<br></br> Im Aravindan <span className='clor'>S</span>
       <p className='text-2xl'>Im a Full-Stack Developer</p></h1>
       <div className='flex py-5 '>
        <a href='#' className='pr-3 hover:text-white'><AiOutlineInstagram size={30 }/></a>
        <a href='#' className='pr-3 hover:text-white'><AiOutlineFacebook size={30}/></a>
        <a href='#' className='pr-3 hover:text-white'><AiOutlineLinkedin size={30}/></a>
       </div>
       </div>
        <img className='w-1/3' src={Heroimg}/> 
    </section>
    
    
}