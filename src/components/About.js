import offertwo from '../assets/offers.png';
import chef from '../assets/chef.svg';
import good from '../assets/good.svg';
import { CakeIcon} from '@heroicons/react/24/solid'

export default function Offers(){

    return<section className="font-hero-font bg-about" id='about'>
    <div className="flex flex-col justify-center md:flex-row py-28 gap-7">
        <div className="w-[400px] md:w-1/2 ">
            <img src={offertwo}/>

        </div>
        <div className="w-[400px] md:w-1/2 py-10">
            <h1 className='text-orange-700 flex  gap-3 font-bold text-2xl'><CakeIcon class="size-6" />About Us<CakeIcon class="size-6" /></h1>
            <h1 className='text-black py-4 font-bold text-5xl'>Variety of Flavours From American Cuisine</h1>
            <p className='text-gray-800 text-1xl'>Every dish is not just prepared it's crafted with a savor the a utmost precision and</p>
            <p className='text-gray-800 text-1xl'>a deep understanding sdf of flavor harmony. The experienced hands of out chefs.</p>

            <div className='flex justify-start md:justify-center'>
            <div className=" w-[200px] md:w-1/2 py-10">
                <img src={good}/>
                <h1 className='text-2xl font-bold'>Super Quality Food</h1>
                <p className='text-1xl md:text-2xl'>Served out testy food & </p>
                <p className='text-1xl md:text-2xl'>good by fiendly</p>
            </div>
            <div className="w-[200px] md:w-1/2 py-10">
                <img src={chef}/>
                <h1 className='text-2xl font-bold'>Quality Chef</h1>
                <p className='text-1xl md:text-2xl'>Served out testy food & </p>
                <p className='text-1xl md:text-2xl'>good by fiendly</p>
            </div>

            </div>
            
            
        </div>
    </div>

</section>


}