"use client"

import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"
import { MenuIcon } from "lucide-react"
import { Button } from "@/components/ui/button"
import NavItems from "./NavItems"
import Link from 'next/link'
import Image from "next/image"
import MobileNav from "./ui/MobileNav"
  
export function HeaderMenu() {
  const { theme, setTheme } = useTheme();
  const toggleTheme = () => {
        setTheme(theme === "light" ? "dark" : "light");
    };
 const navItems = ["Expericence", "Projects", "Contact"]
  return (

        <header className="w-full sticky top-0 z-30 transition-all" >
            <div className="max-w-7xl lg:mx-auto p-5 md:px-10 xl:px-0 w-full flex justify-between">
                <Link href='/' className='w-36 justify-start rounded-3xl'>
                    <Image className="rounded-lg" src="/assets/john.png" width={56} height={38} alt='logo' priority={false} placeholder ="empty"/>
                </Link>
                <nav className='md:flex items-center justify-between hidden w-full max-w-xs gap-4'>
                    <NavItems /> 
                    
                </nav>
                <div className="flex w-32 justify-end gap-3">
                    <Button className="flex justify-center items-center" variant="outline" size="icon" onClick={() => toggleTheme()}>
                        <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100 text-neutral-700 dark:text-neutral-400" />
                        <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0 text-neutral-700 dark:text-neutral-400" />
                       
                    </Button>
                  
                    <MobileNav />
                  
                </div>        
            </div>
        </header>



  )
}
