"use client"
import { ReadMore } from './ui/readMore'
import { InfiniteMovingCards } from './ui/infinite-moving-cards'
import { experiences, projects } from '@/constants'


import Experience from './ui/Experience'
import { Project } from './ui/Projects'


const HomeComponent = () => {

const aboutMe = "In 2016, I embarked on my journey into software development, initially honing my skills through a certificate of introduction to python at Regis University before pursuing a bachelor's degree at Laval University in 2017-2021.<br><br>Fast forward to today, I boast over 5 years of immersive experience in Web & Mobile software development. Throughout my career, I have collaborated with various engineering firms, contributing my expertise to diverse projects. Checkout my experience section.<br><br>Among my notable achievements is the creation of Sinc, an innovative event ticketing platform, in collaboration with my Co-Founders. Sinc has significantly transformed and enhanced the events industry landscape in Rwanda.<br><br>Beyond coding, I am passionate about expanding my knowledge in Artificial intelligence.During my leisure time, you can find me indulging in pool table, socializing with friends."
const testimonials = [
    {
      quote:
        "It was the best of times, it was the worst of times, it was the age of wisdom, it was the age of foolishness, it was the epoch of belief, it was the epoch of incredulity, it was the season of Light, it was the season of Darkness, it was the spring of hope, it was the winter of despair.",
      name: "Charles Dickens",
      title: "A Tale of Two Cities",
      image:"/assets/GraphQl.svg"
    },
    {
      quote:
        "To be, or not to be, that is the question: Whether 'tis nobler in the mind to suffer The slings and arrows of outrageous fortune, Or to take Arms against a Sea of troubles, And by opposing end them: to die, to sleep.",
      name: "William Shakespeare",
      title: "Hamlet",
      image:"/assets/Javascript.svg"
    },
    {
      quote: "All that we see or seem is but a dream within a dream.",
      name: "Edgar Allan Poe",
      title: "A Dream Within a Dream",
      image:"/assets/NextJs.svg"
    },
    {
      quote:
        "It is a truth universally acknowledged, that a single man in possession of a good fortune, must be in want of a wife.",
      name: "Jane Austen",
      title: "Pride and Prejudice",
      image:"/assets/React.svg"
    },
    {
      quote:
        "Call me Ishmael. Some years ago—never mind how long precisely—having little or no money in my purse, and nothing particular to interest me on shore, I thought I would sail about a little and see the watery part of the world.",
      name: "Herman Melville",
      title: "Moby-Dick",
      image:"/assets/ReactNative.svg"
    },
    {
        quote:
          "Call me Ishmael. Some years ago—never mind how long precisely—having little or no money in my purse, and nothing particular to interest me on shore, I thought I would sail about a little and see the watery part of the world.",
        name: "Herman Melville",
        title: "Moby-Dick",
        image:"/assets/TailwindCss.svg"
    },
    {
        quote:
          "Call me Ishmael. Some years ago—never mind how long precisely—having little or no money in my purse, and nothing particular to interest me on shore, I thought I would sail about a little and see the watery part of the world.",
        name: "Herman Melville",
        title: "Moby-Dick",
        image:"/assets/Typescript.svg"
    },
  ];
 
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

        <section id="projects" className="w-full text-center py-4">
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