"use client"
import { headerLinks } from '@/constants'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'
import { SheetClose } from './ui/sheet'

const NavItems = ({}) => {
    const pathname = usePathname();
  return (
    <ul className='md:flex-between w-full flex-col items-start  md:flex-row text-neutral-700 dark:text-neutral-400'>{
        headerLinks.map((link)=>{
           return(

            <li  key={link.route} className="p-medium-16 whitespace-nowrap sm:my-4">
                <Link 
                href={link.route}
                >
                    {
                        link.label
                    }
                </Link>
            </li>
           )
        })
        
    }
    <Link className='p-medium-16' href="https://app.enhancv.com/share/712639cb/?utm_medium=growth&utm_campaign=share-resume&utm_source=dynamic" target="_blank">Resume</Link> 
    </ul>
  )
}

export default NavItems