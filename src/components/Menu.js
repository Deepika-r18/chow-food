import Chicken from '../assets/chicken.jpg';
import Chickenthree from '../assets/chickentwo.png';
import Seagrilled from '../assets/sea grilled.jpeg';
import Seafood from '../assets/sea foods.png';
import Biriyani from '../assets/biriyani.jpg';
import Meals from '../assets/veg meals.jpg';
import Parota from '../assets/parotta.jpg';
import Vegge from '../assets/veggie.jpg';
import fruit from '../assets/fruitsalad.jpg';
import burger from '../assets/bigburger.jpg';
import pasta from '../assets/pasta.png';





import { ClockIcon } from '@heroicons/react/24/solid'




export default function Menu(){

    return<section className="my-5 text-center font-hero-font" id='Menu'>
        <h1 className="text-5xl py-12 font-bold text-orange-700">Check Our Dishes</h1>
        <ul className="flex justify-center text-gray-500 font-bold lap-nav hover:decoration-slice ">
                <li className=' hover:text-orange-500 px-5 text-1xl'><a href='#'>All</a></li>
                <li className=' hover:text-orange-500 px-5 text-1xl'><a href='#nonveg'>Non Veg's</a></li>
                <li className=' hover:text-orange-500 px-5 text-1xl'><a href='#veg'>Veg's</a></li>
                <li className=' hover:text-orange-500 px-5 text-1xl'><a href='#fruits'>Fruits</a></li>
         </ul>

             {/* veg items */}

        <div className="my-5 font-hero-font" id='nonveg'>
            <h1 className="text-3xl py-2 px-20  font-bold text-gray-600 text-center text">Non-Veg Items</h1>
            <div className='flex flex-col justify-center md:flex-row px-10 py-10 gap-7'>
                <div className='relative menu'>
                    <img className='h-[300px] ' src={Biriyani}/>
                    <div>
                        <p className='text-center text-gray-600 hover:text-orange-600 font-bold text-2xl py-1'>Briyani</p>
                        <p className='flex justify-center text-gray-600 py-2 gap-2'><ClockIcon class="size-6" />45 Mins</p>
                        <button className='order-btn  hover:bg-orange-600'>Order Now</button>
                    </div>
                </div>
                <div className='relative menu'>
                    <img className='h-[300px] ' src={Chicken}/>
                    <div>
                        <p className='text-center text-gray-600 hover:text-orange-600 font-bold text-2xl py-1'>Chicken</p>
                        <p className='flex justify-center text-gray-600 py-2 gap-2'><ClockIcon class="size-6" />45 Mins</p>
                        <button className='order-btn hover:bg-orange-600'>Order Now</button>
                    </div>
                </div>
                <div className='relative menu'>
                    <img className='h-[300px] w-[300px] ' src={Chickenthree}/>
                    <div>
                        <p className='text-center text-gray-600 hover:text-orange-600 font-bold text-2xl py-1'>Meat</p>
                        <p className='flex justify-center text-gray-600 py-2 gap-2'><ClockIcon class="size-6" />45 Mins</p>
                        <button className='order-btn hover:bg-orange-600'>Order Now</button>
                    </div>
                </div>
        </div>
        </div>
        <div className='flex flex-col justify-center md:flex-row px-10 py-8 gap-20'>
            <div className='relative menu'>
                <img className='h-[300px]  w-[350px] ' src={Seagrilled}/>
                <div>
                    <p className='text-center text-gray-600 hover:text-orange-600 font-bold text-2xl py-1'>Sea Grilled</p>
                    <p className='flex justify-center text-gray-600 py-2 gap-2'><ClockIcon class="size-6" />45 Mins</p>
                    <button className='order-btn hover:bg-orange-600'>Order Now</button>
                </div>
            </div>
            <div className='relative menu'>
                <img className='h-[300px] ' src={Seafood}/>
                <div>
                    <p className='text-center text-gray-600 hover:text-orange-600 font-bold text-2xl py-1'>Sea Foods</p>
                    <p className='flex justify-center text-gray-600 py-2 gap-2'><ClockIcon class="size-6" />45 Mins</p>
                    <button className='order-btn hover:bg-orange-600'>Order Now</button>
                </div>
            </div>

        </div>

        {/* veg and fruits */}

        <div>
            <h1 className="text-3xl py-2 px-20  text-center text font-bold text-gray-600" id='veg'>Veg Items</h1>
            <div className='flex flex-col justify-center md:flex-row px-10 py-8 gap-20'>
              
                <div className='relative menu'>
                    <img className='h-[300px]  w-[300px] ' src={Meals}/>
                    <div>
                        <p className='text-center text-gray-600 hover:text-orange-600 font-bold text-2xl py-1'>Full Meals</p>
                        <p className='flex justify-center text-gray-600 py-2 gap-2'><ClockIcon class="size-6" />25 Mins</p>
                        <button className='order-btn hover:bg-orange-600'>Order Now</button>
                    </div>
                </div>
                <div className='relative menu'>
                    <img className='h-[300px] w-[300px] ' src={Vegge}/>
                    <div>
                        <p className='text-center text-gray-600 hover:text-orange-600 font-bold text-2xl py-1'>Veg Salad</p>
                        <p className='flex justify-center text-gray-600 py-2 gap-2'><ClockIcon class="size-6" />25 Mins</p>
                        <button className='order-btn hover:bg-orange-600'>Order Now</button>
                    </div>
                </div>
                <div className='relative menu'>
                    <img className='h-[300px] ' src={Parota}/>
                    <div>
                        <p className='text-center text-gray-600 hover:text-orange-600 font-bold text-2xl py-1'>Parrota</p>
                        <p className='flex justify-center text-gray-600 py-2 gap-2'><ClockIcon class="size-6" />10 Mins</p>
                        <button className='order-btn hover:bg-orange-600'>Order Now</button>
                    </div>
                </div>
            </div>

        </div>

        {/* fruits */}
        <div>
        <h1 className="text-3xl py-2 px-20 text-center text font-bold text-gray-600" id='fruits'>Fruits and Others</h1>
            <div className='flex flex-col justify-center md:flex-row px-10 py-8 gap-20'>
              
                <div className='relative menu'>
                    <img className='h-[300px]  w-[300px] ' src={fruit}/>
                    <div>
                        <p className='text-center text-gray-600 hover:text-orange-600 font-bold text-2xl py-1'>Fruit Salad</p>
                        <p className='flex justify-center text-gray-600 py-2 gap-2'><ClockIcon class="size-6" />10 Mins</p>
                        <button className='order-btn hover:bg-orange-600'>Order Now</button>
                    </div>
                </div>
                <div className='relative menu'>
                    <img className='h-[300px] w-[300px] ' src={pasta}/>
                    <div>
                        <p className='text-center text-gray-600 hover:text-orange-600 font-bold text-2xl py-1'>Pasta</p>
                        <p className='flex justify-center text-gray-600 py-2 gap-2'><ClockIcon class="size-6" />25 Mins</p>
                        <button className='order-btn hover:bg-orange-600'>Order Now</button>
                    </div>
                </div>
                <div className='relative menu'>
                    <img className='h-[300px] ' src={burger}/>
                    <div>
                        <p className='text-center text-gray-600 hover:text-orange-600 font-bold text-2xl py-1'>burgers</p>
                        <p className='flex justify-center text-gray-600 py-2 gap-2'><ClockIcon class="size-6" />15 Mins</p>
                        <button className='order-btn hover:bg-orange-600'>Order Now</button>
                    </div>
                </div>
            </div>

        </div>


       


            
        
        

    </section>
    


}