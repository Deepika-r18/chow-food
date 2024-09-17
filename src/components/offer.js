import offer from '../assets/pizza offer.png';
import { ArrowRightIcon } from '@heroicons/react/24/solid'

export default function Offers(){

    return<section className="font-hero-font bg-offer" id='offers'>
        {/* <h1 className="text-5xl text-center py-12 font-bold text-orange-700">Today Offers</h1> */}
        <div className="flex flex-col justify-center md:flex-row px-10 py-10 gap-7">
            <div className="w-[400px] md:w-1/2 py-10">
                <h1 className='text-orange-700 font-bold text-2xl'>Welcome CHOW</h1>
                <h1 className='text-white py-3 font-bold text-5xl'>TODAY SPECIAL FOOD</h1>
                <h1 className='text-orange-400 py-2 font-bold text-2xl'>Limited Time Offer</h1>
                <button className=' flex order-btn-two text-2xl py-4 hover:bg-orange-500 gap-2'>Order Now <ArrowRightIcon class="size-6 text-center" /></button>
            </div>
            <div className="w-[400px] md:w-1/2 ">
                <img src={offer}/>

            </div>
        </div>

    </section>


}