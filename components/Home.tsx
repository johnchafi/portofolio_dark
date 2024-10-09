"use client"
import { ReadMore } from './ui/readMore'
import { InfiniteMovingCards } from './ui/infinite-moving-cards'
import { experiences, projects, aboutMe, testimonials } from '@/constants'
import Experience from './ui/Experience'
import { Project } from './ui/Projects'


const HomeComponent = () => { 
return (
    <>
        <section className="">
            <div className="flex items-center justify-center w-full flex-col px-4">
                <h2 className="bg-clip-text text-transparent text-center bg-gradient-to-b from-neutral-900 to-neutral-700 dark:from-neutral-600 dark:to-white text-2xl md:text-4xl lg:text-7xl font-sans py-2 md:py-10 relative z-20 font-bold tracking-tight">
                    Hello <span className='text-white'>👋,</span> <br /> I'm Jean de Dieu Uwimana.
                </h2>
                <p className="max-w-xl mx-auto md:p-medium-16 p-medium-14 text-neutral-700 dark:text-neutral-400 text-center">
                    A Full stack developer 🧑‍💻 based in Canada dedicated to crafting accessible Web and Mobile solutions.
                </p>
            </div>

        </section>
        <section id='about' className="w-full flex-col justify-center items-center my-8">
            <div className="md:w-9/12 md:text-center md:mx-auto mx-8">
                <h2 className="md:h2-bold h3-medium text-center py-8 text-neutral-700 dark:text-neutral-400 ">ABOUT ME</h2>
                <ReadMore id="read-more-text" text={aboutMe} />
            </div>

        </section>
        <section className="w-full">
        <InfiniteMovingCards
            items={testimonials}
            direction="left"
            speed="fast"
        />
        </section>
        <section id="experience" className="w-full flex-col justify-center items-center my-8 ">
            <div className="md:w-9/12 md:text-center md:mx-auto mx-8">
                    <h2 className="md:h2-bold h3-medium text-center py-8 text-neutral-700 dark:text-neutral-400 ">EXPERIENCE</h2>
            </div>
            {
                experiences.map((experience)=>(
                    <Experience key={experience.company} {...experience}/>    

                ))
            }
        </section>
        <section id="projects" className="w-full text-center py-4 sm:mx-8">
            <h2 className="md:h2-bold h3-medium text-center text-neutral-700 dark:text-neutral-400">PROJECTS</h2>
          
            <div className='w-full flex-center flex-wrap md:gap-10 gap-2'>
              {
                projects.map((project, index)=>( <Project key={index} {...project}/>))
              }
            </div> 
        </section>
    </>
  )
}

export default HomeComponent