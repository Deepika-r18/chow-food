import { ClockIcon } from '@heroicons/react/24/solid'
import { UserCircleIcon } from '@heroicons/react/24/solid'


export default function Home(){

    return<section className="background-img px-20 py-32 font-hero-font" id='Home'>
        <div>
            <button className="text-white font-bold text-2xl bg-button ">Baking</button>
            <div className="text-white text-6xl">
                <p>Mexican Grilled Corn </p>
                <p>Recipe</p>
            </div>
            <div  className='py-3 text-white gap-3 flex justify-start'>
                <div>
                    <p className='flex align-middle'><ClockIcon class="size-6" />30 Mins</p>
                </div>
                <div>
                    <p className='flex align-middle'><UserCircleIcon class="size-6" />By DP</p>
                </div>
            </div>
            <button className="text-white font-bold text-2xl bg-button-two ">View Recipes</button>
        </div>
        
        


    </section>

}