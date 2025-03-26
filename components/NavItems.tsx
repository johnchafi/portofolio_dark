"use client"
import { headerLinks } from '@/constants'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'
import { SheetClose } from './ui/sheet'

// interface Props {
//     containerStyles?: string;
//     linkStyles?: string;
//     underlineStyles?: string;
//   }
const NavItems = (props: any) => {
    const pathname = usePathname();
  return (
    <ul className='md:flex-between w-full flex-col items-start  md:flex-row text-neutral-700 dark:text-neutral-400'>{
        headerLinks.map((link)=>{
           return(

            <li  key={link.route} className="p-medium-16 whitespace-nowrap sm:my-4" onClick={() => props.setOpen? props.setOpen(false) : undefined}>
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
    <Link  href="" target="_blank">Resume</Link> 
    </ul>
  )
}

export default NavItems