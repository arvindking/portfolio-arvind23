import { Bars3Icon } from '@heroicons/react/24/solid'

export default function Header(){
    return <header className="flex justify-between py-3 px-5 bg-primary">
        <a className="font-bold text-black text-2xl" href="#"> Aravindan S</a>
        <nav className="hidden md:block"> 
            <ul className="flex text-white">
            <li><a  className='hover:text-black' href="#">Home</a></li>
            <li><a className='hover:text-black' href="#">About</a></li>
            <li><a className='hover:text-black' href="#">Projects</a></li>
            <li><a className='hover:text-black' href="#">Contact</a></li>
        </ul>
        </nav>
       <button className='block md:hidden'>< Bars3Icon ClassName="text-black h-5"/></button>
    </header>
}