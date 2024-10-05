import React from 'react'
import { BackgroundLines } from './ui/background-lines'
import { ReadMore } from './ui/readMore'
import { InfiniteMovingCards } from './ui/infinite-moving-cards'


const HomeComponent = () => {

const aboutMe = "In 2018, I embarked on my journey into software development, initially honing my skills through Free Code Camp before delving into a software training bootcamp known as ATLP, facilitated by Andela Rwanda.Fast forward to today, I boast over 5 years of immersive experience as a Web & Mobile Engineer. Throughout my career, I have collaborated with various engineering firms, contributing my expertise to diverse projects.Checkout my experience sectionAmong my notable achievements is the creation of Sinc, an innovative event ticketing platform, in collaboration with my Co-Founders. Sinc has significantly transformed and enhanced the events industry landscape in Rwanda.Beyond coding, I am passionate about expanding my knowledge in Cyber Security.During my leisure time, you can find me indulging in pool table, socializing with friends, or immersing myself in the vibrant events scene, often facilitated by Sinc."
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
                    Hello 👋, <br /> I'm Jean de Dieu Uwimana.
                </h2>
                <p className="max-w-xl mx-auto text-sm md:text-lg text-neutral-700 dark:text-neutral-400 text-center">
                    A Full stack developer 🧑‍💻 Dedicated to crafting accessible Web and Mobile solutions, Based in Canada.
                </p>
            </div>

        </section>
        <section className="w-full flex-col justify-center items-center my-8">
            <div className="md:w-9/12 md:text-center md:mx-auto">
                <h2 className="h2-bold py-8">ABOUT ME</h2>
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
        <section className="">

        </section>
    </>
  )
}

export default HomeComponent