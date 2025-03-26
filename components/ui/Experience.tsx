import {useState} from 'react'
import {
    Collapsible,
    CollapsibleContent,
    CollapsibleTrigger,
  } from "@/components/ui/collapsible"
import { ChevronDown, ChevronLeft } from 'lucide-react'
import { Button } from "@/components/ui/button"
import Image from 'next/image'
import { motion } from "framer-motion";

type ExperinceProps = {
    company:string,
    title:string,
    imageSrc:string,
    descriptions:string[],
}

const Experience = ({company,title, descriptions, imageSrc}: ExperinceProps) => {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <div 
  
    className='mx-3 my-8 md:w-9/12 md:text-center md:mx-auto mx-8 flex-col justify-center items-center'>
        <Collapsible
        open={isOpen}
        onOpenChange={setIsOpen}
        className="w-full space-y-2"
    >
        <div className="flex items-center justify-between px-4">
            <div className='flex items-center justify-center'>
                <div className='w-14 mx-2'>
                    <Image className='rounded-full h-14 w-full object-cover' src={imageSrc} width={78} height={56} alt="logo"/>
                </div>
                <div className='flex flex-col items-start p-0'>
                    <p className="m-0 p-0 md:p-medium-16 p-medium-14 whitespace-nowrap"> {company}</p>
                    <p className="m-0 p-0 md:p-medium-16 p-medium-14 text-neutral-700 dark:text-neutral-400 whitespace-nowrap">{title}</p>
                </div>
             
            </div>
        
            <CollapsibleTrigger asChild className='mb-4'>
                <Button variant="ghost" size="sm" className="w-9 p-0">
                    {
                        isOpen ? <ChevronDown className='h-4 w-4'/>  : <ChevronLeft className='h-4 w-4'/> 
                    }
                <span className="sr-only">Toggle</span>
                </Button>
            </CollapsibleTrigger>
        </div>
    
        <CollapsibleContent className="">
            <motion.ul 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ ease: "easeInOut", duration: 0.75 }}
            
            className="flex flex-1 ml-16 flex-col items-start py-3 list-disc my-3 md:p-medium-16 p-medium-14 text-neutral-700 dark:text-neutral-400">
                { 
                     descriptions.map((description, idx) =>(
                       <li className='m-0 p-0 ' key={"key" + idx} >
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
//px-4 flex-col py-3 ml-8 list-disc my-3 md:p-medium-16 p-medium-14 text-neutral-700 dark:text-neutral-400
export default Experience