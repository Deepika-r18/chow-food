import { Bars3Icon } from '@heroicons/react/24/solid'
import { useState } from 'react'
import logo from '../assets/logo.png';

export default function Header(){

    const [toggleMenu, setToggleMenu] = useState(false);

    return <header className="flex justify-between px-5 py-4 font-hero-font">
        <a className="font-bold text-gray-800 px-5 md:px-80 text-3xl" href="#"><img src= {logo}/></a>
        <nav className="hidden md:block px-10 py-3">
            <ul className="flex text-gray-500 font-bold lap-nav hover:decoration-slice ">
                <li className=' hover:text-gray-900 px-5 text-1xl'><a href='#Home'>Home</a></li>
                <li className=' hover:text-gray-900 px-5 text-1xl'><a href='#Menu'>Food Menu</a></li>
                <li className=' hover:text-gray-900 px-5 text-1xl'><a href='#offers'>Offers</a></li>
                <li className=' hover:text-gray-900 px-5 text-1xl'><a href='#about'>About Us</a></li>
                <li className=' hover:text-gray-300 px-5 text-1xl'><a href='#contact'>Contact Us</a></li>
            </ul>
        </nav>
        {toggleMenu && <nav className="block md:hidden " >
            <ul onClick={() => setToggleMenu(!toggleMenu)} className="flex flex-col text-black mobile-nav ">
                <li><a href="#Home">Home</a></li>
                <li><a href="#Menu">Food Menu</a></li>
                <li><a href="#offers">Offers</a></li>
                <li><a href="#about">About Us</a></li>
                <li><a href="#contact">Contact us</a></li>
            </ul>

        </nav>}
        <button onClick={() => setToggleMenu(!toggleMenu)} className='block md:hidden'><Bars3Icon className='text-gray-300 h-5'/></button>
    </header>

}