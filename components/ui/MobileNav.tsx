
"use client"
import { useState } from "react"
import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetDescription,
    SheetFooter,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
  } from "@/components/ui/sheet"
import Image from 'next/image'
import { Separator } from '../ui/separator'
import NavItems from '../NavItems'
import { Button } from './button'
import { MenuIcon } from 'lucide-react'

const MobileNav = () => {
  const [sheetOpen, setSheetOpen] = useState(false);
  return (
    <nav className='md:hidden'>
        <Sheet  open={sheetOpen} onOpenChange={setSheetOpen}>
            <SheetTrigger  className='align-middle'>
            {/* <Button variant="outline" > */}
                <MenuIcon className='mt-2 w-8 text-neutral-400'/>
            {/* </Button> */}
                  
            </SheetTrigger>
            <SheetContent className='flex flex-col gap-6'>
                <Image 
                className='rounded-lg'
                src="/assets/grad2.jpeg"

                width={56}
                height={38}
                alt='logo'
                />
                {/* <Separator className='border border-gray-50'/> */}
            {/* <SheetClose asChild> */}
                <NavItems setOpen={setSheetOpen}/>
            {/* </SheetClose> */}
                
             
            </SheetContent>
        </Sheet>
    </nav>
  )
}

export default MobileNav


