import React, { FC } from 'react'

const Wrapper:FC<{children:React.ReactNode}> = ({children}) => {
  return (
    <div className='max-w-screen-2xl px-6 mx-auto'>


{children}



    </div>
  )
}

export default Wrapper