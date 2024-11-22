import React from 'react'
import Wrapper from './Wrapper'
import Image from 'next/image'

const SkillsSection=[

{
img:"/html.png",
desc:"HTMl",
percentage:"90%"

},
{
img:"/css.png",
desc:"CSS",
percentage:"75%"

},

{
  img:"/type.png",
  desc:"Type Script",
  percentage:"90%"
  
  },
  {
    img:"/java.png",
    desc:"Java Script",
    percentage:"70%"
    
    },
    {
      img:"/react.png",
      desc:"React",
      percentage:"65%"
      
      },
      {
        img:"/next.png",
        desc:"Next js",
        percentage:"75%"
        
        },

]
const Skills = () => {
  return (
    <Wrapper>
    <main className='mt-9 '>
<div>

    <h5 className='text-center text-3xl font-bold underline'>Skills</h5>
</div>

<div className='flex justify-center items-center gap-9 flex-col md:flex-row mt-[100px] '>
  {
    SkillsSection.map((items,i)=>(
      <div key={i} data-aos="zoom-in">

<Image src={items.img} alt='html-logo' height={200} width={200} className='hover:scale-105 duration-300'/>
<h4 className='text-center text-xl font-bold mt-2'> {items.desc}</h4>
<p className='text-center text-xl font-bold mt-2'>{items.percentage}</p>

      </div>


    ))
  }


</div>

    </main>
    </Wrapper>
  )
}

export default Skills