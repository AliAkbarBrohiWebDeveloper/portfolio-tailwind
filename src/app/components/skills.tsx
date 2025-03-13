// import React from 'react'
// import Wrapper from './Wrapper'
// import Image from 'next/image'

// const SkillsSection=[

// {
// img:"/html.png",
// desc:"HTMl",
// percentage:"90%"

// },
// {
// img:"/css.png",
// desc:"CSS",
// percentage:"75%"

// },

// {
//   img:"/type.png",
//   desc:"Type Script",
//   percentage:"90%"
  
//   },
//   {
//     img:"/java.png",
//     desc:"Java Script",
//     percentage:"70%"
    
//     },
//     {
//       img:"/react.png",
//       desc:"React",
//       percentage:"65%"
      
//       },
//       {
//         img:"/next.png",
//         desc:"Next js",
//         percentage:"75%"
        
//         },

// ]
// const Skills = () => {
//   return (
//     <Wrapper>
//     <main className='mt-9 '>
// <div>

//     <h5 className='text-center text-3xl font-bold underline'>Skills</h5>
// </div>

// <div className='flex justify-center items-center gap-9 flex-col md:flex-row mt-[100px] '>
//   {
//     SkillsSection.map((items,i)=>(
//       <div key={i} data-aos="zoom-in">

// <Image src={items.img} alt='html-logo' height={200} width={200} className='hover:scale-105 duration-300'/>
// <h4 className='text-center text-xl font-bold mt-2'> {items.desc}</h4>
// <p className='text-center text-xl font-bold mt-2'>{items.percentage}</p>

//       </div>


//     ))
//   }


// </div>

//     </main>
//     </Wrapper>
//   )
// }

// export default Skills










import React from 'react'
import Wrapper from './Wrapper'
import Image from 'next/image'

const SkillsSection = [
  {
    img: "/html.png",
    desc: "HTML",
    percentage: "90%"
  },
  {
    img: "/css.png",
    desc: "CSS",
    percentage: "75%"
  },
  {
    img: "/type.png",
    desc: "TypeScript",
    percentage: "90%"
  },
  {
    img: "/java.png",
    desc: "JavaScript",
    percentage: "70%"
  },
  {
    img: "/react.png",
    desc: "React",
    percentage: "65%"
  },
  {
    img: "/next.png",
    desc: "Next.js",
    percentage: "75%"
  },
]

const Skills = () => {
  return (
    <Wrapper>
      <main className="mt-16">
        <div>
          <h5 className="text-center text-4xl font-extrabold text-gray-800 underline mb-10">
            Skills
          </h5>
        </div>

        <div className="flex flex-col md:flex-row justify-center items-center gap-8 md:gap-16">
          {SkillsSection.map((item, i) => (
            <div
              key={i}
              data-aos="zoom-in"
              className="flex flex-col items-center justify-center p-4 shadow-lg rounded-xl transform transition-transform duration-300 hover:scale-105"
            >
              <div className="relative w-32 h-32 md:w-40 md:h-40 mb-4">
                <Image
                  src={item.img}
                  alt={`${item.desc}-logo`}
                  layout="fill"
                  objectFit="contain"
                  className="rounded-full"
                />
              </div>
              <h4 className="text-xl font-semibold text-gray-800 mb-2">
                {item.desc}
              </h4>
              <p className="text-lg font-medium text-gray-600">
                {item.percentage}
              </p>
            </div>
          ))}
        </div>
      </main>
    </Wrapper>
  )
}

export default Skills
