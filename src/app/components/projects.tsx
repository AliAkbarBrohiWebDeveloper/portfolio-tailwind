import Image from 'next/image'
import React from 'react'
import Wrapper from './Wrapper'

const projects=[{

src:"/amazon.png",
desc:"Amazon Clone",
languages:["HTML ,","CSS"]

},
{

  src:"/food.png",
desc:"Food Website Clone",
languages:["HTML ,","CSS"]

},


{
  src:"/currency.png",
  desc:"Currency Converter",
  languages:["HTML ," ,"CSS ," ,"Java Script"]
  


},
{
src:"/cal1.png",
desc:"Calcultar",
languages:["HTML ,","CSS ,","java script"]




}
]

const Services = () => {
  return (
    <section className=' mt-9'>
      <Wrapper>
<div>
<h3 className='text-center font-bold text-4xl underline'> My Projects</h3>

</div>


<div className='flex justify-between items-center mt-[50px] gap-3 px-6 flex-col md:flex-row '>

{
  projects.map((items,index)=>(

<div key={index}  data-aos="zoom-in">

<Image src={items.src} alt='"Amazon' height={300} width={300} className='hover:scale-105 duration-300'/>
<h3 className='font-medium text-xl mt-4'>{items.desc} </h3>
<br />
<span className='bg-red-500 text-white  px-6 py-2'>{items.languages}</span>



</div>



  ))
}


</div>

</Wrapper>

    </section>
  )
}

export default Services