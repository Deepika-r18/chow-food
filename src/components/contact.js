import logoimage from '../assets/logo.png';

import { MapPinIcon } from '@heroicons/react/24/solid'
import { EnvelopeIcon } from '@heroicons/react/24/solid'
import { PhoneIcon } from '@heroicons/react/24/solid'
import { FaceSmileIcon } from '@heroicons/react/24/solid'
import { FaWhatsapp } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";




export default function Contact(){

    return<section className="py-11 font-hero-font bg-contact" id="contact">

        <h1 className='text-orange-700 flex justify-center text-5xl font-bold gap-7'>Contact us<FaceSmileIcon class="size-12 text-orange-600" /></h1>
        <div className="py-10 flex flex-col justify-center md:flex-row  hover:text-orange-5000 gap-5">
            <div className='flex hover:text-orange-500'>
                <div>
                    <a href='#'><MapPinIcon class="size-6 text-white hover:text-orange-600" /></a>
                </div>
                <div className='text-white'>
                    <p className='text-2xl hover:text-orange-600 px-2'>4648 Main Road, Chennai</p>
                </div>
            </div>
            <div className='flex hover:text-orange-500'>
                <div>
                    <a href='#'><EnvelopeIcon class="size-6 text-white hover:text-orange-600" /></a>
                </div>
                <div className='text-white'>
                    <p className='text-2xl hover:text-orange-600 px-2'>info@example.com</p>
                </div>
            </div>
            <div className='flex hover:text-orange-500'>
                <div>
                    <a href='#'><PhoneIcon class="size-6 text-white hover:text-orange-600" /></a>
                </div>
                <div className='text-white'>
                    <p className='text-2xl hover:text-orange-600 px-2'>+9876543210</p>
                </div>
            </div>

        </div>
        <div className='flex justify-evenly py-5 flex-col md:flex-row gap-8'>
            <div className='px-7'>
                <img src={logoimage}/>
                <div className='text-white py-5 flex gap-3 text-center'>
                    <a className='hover:text-orange-500' target='_blank' href='https://www.instagram.com/accounts/login/?hl=en'><FaWhatsapp size={25}/></a>
                    <a className='hover:text-orange-500' target='_blank' href='https://www.instagram.com/accounts/login/?hl=en'><FaInstagram size={25}/></a>
                    <a className='hover:text-orange-500' target='_blank' href='https://www.facebook.com/login/'><FaFacebook size={25}/></a>
                    <a className='hover:text-orange-500' target='_blank' href='https://x.com/i/flow/login?input_flow_data=%7B%22requested_variant%22%3A%22eyJteCI6IjIifQ%3D%3D%22%7D'><FaTwitter size={25}/></a>
                </div>
            </div>
            <div className='text-white px-7'>
                <h1 className='text-2xl py-2'>Timing</h1>
                <h1 className='text-gray-400 py-3'>Monday - Friday: <span className='text-white'>8am-4pm</span></h1>
                <h1 className='text-gray-400'>Saturday: <span className='text-white'>8am-12am</span></h1>
                <h1 className='text-gray-400 py-3'>Sunday: <span className='text-white'>Holiday</span></h1>

            </div>
        </div>
    


    </section>


}