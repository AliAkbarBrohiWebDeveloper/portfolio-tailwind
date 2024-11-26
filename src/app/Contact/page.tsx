"use client"
import Wrapper from '../components/Wrapper'
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Contact = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,  
      once: true,   
    });
  }, []);
  return (
    <section className=' mt-[100px]'>
      <Wrapper>

<form action="form" className='text-center gap-x-6 h-auto px-6 flex flex-col items-center rounded-lg py-8 '  data-aos="flip-left">

<fieldset className='w-full max-w-md border-4'>
<legend className='font-bold text-2xl underline'>Contact Us</legend>
<br />
<p>
<label htmlFor="name" className='mt-6 font-bold'>Name: </label>
<input type="text"  placeholder='Enter Name here' required className='mt-2 px-7 py-2 rounded-lg border-2'/>
</p>
<br />
<p>
<label htmlFor="email" className='font-bold'>Email: </label>

<input type="email" placeholder='Enter your email here' required className='mt-6 px-7 py-2 rounded-lg border-2' />
</p>
<br />
<p>
<label htmlFor="phone" className='font-bold'>Ph:No: </label>

<input type="number" placeholder='Enter your phone Number here' required className='mt-2 px-7 py-2 rounded-lg border-2'/>

</p>
<br />
<p>

  <textarea className='mt-6 px-7 py-2 rounded-lg border-2' placeholder='Your  Message' rows={5} required></textarea>
</p>
<button className='bg-teal-500 mt-2 px-7 py-2 rounded-lg text-white text-xl hover:scale-105 duration-300'>Send Message</button>

</fieldset>



</form>




</Wrapper>

    </section>
  )
}

export default Contact