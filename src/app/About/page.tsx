import Image from 'next/image'
import React from 'react'
import AboutImage from "/public/About.jpg"
import Wrapper from '../components/Wrapper'

const AboutPage = () => {
  return (
    <section className='mt-16'>
      <Wrapper>

<main className='flex justify-between  gap-6 px-6 items-center flex-col-reverse md:flex-row ' data-aos="fade-left">

<div>

<h3 className='text-center text-teal-500 text-2xl font-extrabold underline'>About Me</h3>
<p className='text-center max-w-[800px] mt-12 font-medium text-gray-400'>As a frontend web developer I specialize in creating engaging and user-friendly interfaces that enhance the overall web experience. With a keen eye for design and a strong grasp of HTML CSS and JavaScript.I transform creative concepts into functional websites. I am passionate about staying updated with the latest industry trends and technologies ensuring that my projects are not only visually appealing but also optimized for performance and accessibility. Collaborating with designers and backend developers. I strive to deliver seamless and dynamic web applications that meet users needs.</p>
<button  className='py-2 px-6 bg-teal-500 rounded-lg ml-[100px] md:ml-[300px] mt-4 hover:scale-105 duration-300 text-white hover:shadow-sm '>Hire Me</button>



</div>
<div>
<Image src={AboutImage} alt='About-Image' height={500} width={500} className='rounded-3xl'/>


</div>


</main>

</Wrapper>

    </section>
  )
}

export default AboutPage