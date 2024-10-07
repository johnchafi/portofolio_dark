
"use client"
import { useState } from 'react'



interface ReadMoreProps {
  id: string
  text: string
  amountOfWords?: number
}

export const ReadMore = ({ id, text, amountOfWords = 40 }: ReadMoreProps) => {
  const [isExpanded, setIsExpanded] = useState(false)
  const splittedText = text.split(' ')
  const itCanOverflow = splittedText.length > amountOfWords
  const beginText = itCanOverflow
    ? splittedText.slice(0, amountOfWords - 1).join(' ')
    : text
  const endText = splittedText.slice(amountOfWords - 1).join(' ')
  
  const handleKeyboard = (e) => {
    if (e.code === 'Space' || e.code === 'Enter') {
      setIsExpanded(!isExpanded)
    }
  }

  return (

    <p id={id} className='md:p-medium-16 p-medium-14 text-neutral-700 dark:text-neutral-400'>
      {/* {beginText} */}
      {/* { ReactHtmlParser (beginText) } */}
      <span
        dangerouslySetInnerHTML={{
             __html: beginText 


        }}></span>
      
      {itCanOverflow && (
        <>
          {!isExpanded && <span>... </span>}
          <span 
            className={`${!isExpanded && 'hidden'}`} 
            aria-hidden={!isExpanded}
            dangerouslySetInnerHTML={{ __html: ' ' + endText }}
          >
            {/* {endText} */}
          </span>
          <span
            className='text-violet-400 ml-2'
            role="button"
            tabIndex={0}
            aria-expanded={isExpanded}
            aria-controls={id}
            onKeyDown={handleKeyboard}
            onClick={() => setIsExpanded(!isExpanded)}
          >
            {isExpanded ? 'Read less' : 'Read more'}
          </span>
        </>
      )}
    </p>

  )
}