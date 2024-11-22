

import React from 'react';
import profile1 from "/public/profile1.png"
import Typewriter from 'typewriter-effect';
import Wrapper from './Wrapper';
import Image from 'next/image';


const Hero = () => {


    const header="I am Ali Akbar Brohi \n frontend web developer"
  return (
    <>
    <section>
      <Wrapper>
    
    <main className='flex  justify-between items-center flex-col md:flex-row mt-6'data-aos="zoom-in-down">

<div>


<h1 className='font-bold text-3xl whitespace-pre-line'>{header}</h1>
<p className='font-medium text-gray-500 mt-2 max-w-screen-sm'> As a frontend web developer, I focus on crafting intuitive and visually appealing user interfaces that elevate digital experiences. I leverage my expertise in HTML, CSS, and JavaScript to bring designs to life, ensuring that websites are both functional and responsive across all devices.</p>
<button className='py-2 px-7 bg-teal-500 text-white mt-4 rounded-lg hover:scale-105 duration-300'>View My Work</button>

</div>
<div>

<Image src={profile1} alt='profile-picture' height={400} width={400} className='rounded-full mt-9'/>

</div>

    </main>
    </Wrapper>
    </section>
    </>
    
    
  )
}
export default Hero
