import {useState} from 'react'
import {
    Collapsible,
    CollapsibleContent,
    CollapsibleTrigger,
  } from "@/components/ui/collapsible"
import { ChevronDown, ChevronLeft, ChevronRight } from 'lucide-react'
import { Button } from "@/components/ui/button"
import Image from 'next/image'
import { motion } from "framer-motion";

type ExpericenceProps = {
    company:string,
    title:string,
    imageSrc:string,
    descriptions:string[],

}

const Experience = ({company,title, descriptions, imageSrc}: ExpericenceProps) => {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <div 
  
    className='mx-3 my-8 '>
        <Collapsible
        open={isOpen}
        onOpenChange={setIsOpen}
        className="w-full space-y-2"
    >
        <div className="flex items-center justify-between px-4">
            <div className='flex'>
                <div className='w-14 mx-2'>
                    <Image className='rounded-full h-14 w-full object-cover' src={imageSrc} width={78} height={56} alt="logo"/>
                </div>
                <div className="w-1/2 font-semibold">
                    <p className='md:p-medium-16 p-medium-14'>
                        {company}
                    </p>
                    <h4 className='md:p-medium-16 p-medium-14text-neutral-700 dark:text-neutral-400'>
                    {title}
                    </h4>
                </div>
            </div>
        
            <CollapsibleTrigger asChild className='px-24'>
                <Button variant="ghost" size="sm" className="w-9 p-0">
                    {
                        isOpen ? <ChevronDown className='h-4 w-4'/>  : <ChevronLeft className='h-4 w-4'/> 
                    }
                <span className="sr-only">Toggle</span>
                </Button>
            </CollapsibleTrigger>
        </div>
    
        <CollapsibleContent className="list-disc my-3 ' ">
            <motion.ul 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ ease: "easeInOut", duration: 0.75 }}
            
            className="px-4 py-3 ml-8 list-disc my-3 md:p-medium-16 p-medium-14 text-neutral-700 dark:text-neutral-400">
                {
                    descriptions.map((description, idx) =>(
                      <li className='py-1' key={"key" + idx} >
                         {description} 
                      </li>
                    
                    )
                    )
                }
            </motion.ul>
        </CollapsibleContent>
      
    </Collapsible>

    </div>
  
  )
}

export default Experience