import Link from 'next/link'
import React from 'react'


import { Menu } from 'lucide-react'

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import Wrapper from './Wrapper'


const Header = () => {
  return (
    <section>
    <Wrapper>
    <header className='sticky top-0 z-10 '>
<main className='flex justify-between px-6 py-2 bg-black text-white h-19 items-center '>
<div>

<h1 className='text-2xl font-bold'>Ali Akbar Brohi</h1>
</div>

    <ul>

      <li className='space-x-6 text-1xl font-bold hidden md:block'>

<Link href={'/'}>Home</Link>
<Link href={'/About'}> About    </Link>
<Link href={'/Contact'}>Contact</Link>
        </li>
    
    </ul>
    <Sheet>
  <SheetTrigger className='md:hidden text-xl'><Menu/></SheetTrigger>
  <SheetContent>
    <SheetHeader>
      <SheetTitle></SheetTitle>
      <SheetDescription>
      <ul>

<li className='flex flex-col gap-y-6'>

<Link href={'/'}>Home</Link>
<Link href={'/About'}> About </Link>
<Link href={'/Contact'}>Contact</Link>
  </li>

</ul>
      </SheetDescription>
    </SheetHeader>
  </SheetContent>
</Sheet>





</main>




    </header>
    </Wrapper>/
    </section>
  )
}

export default Header