import { User } from '@clerk/nextjs/server'
import { FC } from 'react'
import Image from 'next/image';
import Link from 'next/link';
import { UserButton } from '@clerk/nextjs';
import { ModeToggle } from '../../global/mode-toggle';

interface indexProps {
  user?: null| User

}

const index: FC<indexProps> = ({user}:indexProps) => {
  return <div className='p-4 flex items-center justify-between relative'>
    <aside className='flex items-center gap-2'>
        <Image src={'./assets/plura-logo.svg'}
        width={40}
        height={40}
        alt='plura logo'/>
        <span className='text-xl font-bold'>Collab.</span>
    </aside>
    <nav className='hidden md:block absolute left-[50%] top-[50%] transform translate-x-[-50%] translate-y-[-50%]'>
        <ul className='flex items-center justify-center gap-8'>
            <Link href={'#'}>Pricing</Link>
            <Link href={'#'}>About</Link>
            <Link href={'#'}>Documentation</Link>
            <Link href={'#'}>Features</Link>
        </ul>
    </nav>
    <aside className='flex gap-2 items-center'>
        <Link href={'/agency'}
        className='bg-primary text-white p-2 px-4 rounded-md hover:bg-primary/80'>
            Login
        </Link>
        <UserButton/>
        <ModeToggle/>
    </aside>
  </div>
}

export default index