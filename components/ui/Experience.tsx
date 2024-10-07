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
    descriptions:string[],

}

const Experience = ({company,title, descriptions}: ExpericenceProps) => {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <div 
  
    className='mx-3 my-8 '>
        <Collapsible
        open={isOpen}
        onOpenChange={setIsOpen}
        className="w-full space-y-2"
    >
        <div className="flex items-center justify-between space-x-4 px-4">
            <div className='flex gap-2'>
                <Image className='rounded-full' src="/assets/john.png" width={78} height={56} alt="logo"/>
                <div className="w-1/2 font-semibold">
                    <p className='min-w-max'>
                        {company}
                    </p>
                    <h4 className='w-fit text-neutral-700 dark:text-neutral-400'>
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