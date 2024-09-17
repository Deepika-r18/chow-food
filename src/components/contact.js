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
        <div className=" px-10 py-10 flex flex-col justify-center md:flex-row hover:text-orange-5000 gap-20 ">
            <div className='flex justify-center hover:text-orange-500 gap-2'>
                <div>
                    <a href='#'><MapPinIcon class="size-6 text-white hover:text-orange-600" /></a>
                </div>
                <div className='text-white'>
                    <h1 className='hover:text-orange-600'>Address</h1>
                    <p className='text-2xl hover:text-orange-600'>4648 Main Road, Chennai</p>
                </div>
            </div>
            <div className='flex justify-center align-middle hover:text-orange-500'>
                <div>
                    <a href='#'><EnvelopeIcon class="size-6 text-white hover:text-orange-600" /></a>
                </div>
                <div className='text-white'>
                    <h1 className='hover:text-orange-600'>Send Email</h1>
                    <p className='text-2xl hover:text-orange-600'>info@example.com</p>
                </div>
            </div>
            <div className='flex justify-center align-middle hover:text-orange-500'>
                <div>
                    <a href='#'><PhoneIcon class="size-6 text-white hover:text-orange-600" /></a>
                </div>
                <div className='text-white'>
                    <h1 className='hover:text-orange-600'>Call</h1>
                    <p className='text-2xl hover:text-orange-600'>+9876543210</p>
                </div>
            </div>

        </div>
        <div className='px-0 py-20 text-center md:px-64'>
            <div className='px-28 md:px-96'>
                <img src={logoimage} className='py-4 px-10' />
                <div className='text-white py-5 flex gap-3 px-12 md:px-10 '>
                    <a className='hover:text-orange-500' target='_blank' href='https://wa.me/9876543210'><FaWhatsapp size={25}/></a>
                    <a className='hover:text-orange-500' target='_blank' href='https://www.instagram.com/accounts/login/?hl=en'><FaInstagram size={25}/></a>
                    <a className='hover:text-orange-500' target='_blank' href='https://www.facebook.com/login/'><FaFacebook size={25}/></a>
                    <a className='hover:text-orange-500' target='_blank' href='https://x.com/i/flow/login?input_flow_data=%7B%22requested_variant%22%3A%22eyJteCI6IjIifQ%3D%3D%22%7D'><FaTwitter size={25}/></a>
                </div>
            </div>
            <div className='text-white py-5'>
                <h1 className='text-2xl py-2'>Timing</h1>
                <h1 className='text-gray-400 py-3'>Monday - Friday: <span className='text-white'>8am-4pm</span></h1>
                <h1 className='text-gray-400'>Saturday: <span className='text-white'>8am-12am</span></h1>
                <h1 className='text-gray-400 py-3'>Sunday: <span className='text-white'>Holiday</span></h1>

            </div>
        </div>
    


    </section>


}