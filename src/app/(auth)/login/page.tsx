import Image from 'next/image'
import React, { FC } from 'react'
interface PageProps{}
const Login:FC<PageProps> = () => {
  return (
    <div className='flex h-full'>
      <section className='flex-1 relative hidden lg:block'>
        <Image alt='login' src='/imgs/login.svg' width={200} height={200} className='w-full h-full absolute top-0 left-0 object-cover' />
      </section>
      <section className='lg:w-[600px] shrink-0 w-full bg-accent-foreground'></section>
    </div>
  )
}

export default Login