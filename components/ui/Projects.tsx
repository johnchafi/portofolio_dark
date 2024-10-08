"use client";

import Image from "next/image";
import React from "react";
import { CardBody, CardContainer, CardItem } from "../ui/3d-card";
import Link from "next/link";
import { Globe } from "lucide-react";
import { List } from "postcss/lib/list";
import { Button } from "./button";

type ProjectProps = {
  title: string,
  description : string,
  image: string,
  link: string,
  languages: Array<string>
}
export function Project({title, description, image, link, languages} : ProjectProps) {
  return (
    <CardContainer className="iter-var">
      <CardBody className="w-full bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1]  sm:w-[30rem] h-auto rounded-xl border">
        <CardItem
          translateZ="50"
          className="mx-2  md:p-medium-16 p-medium-14"
        >
         {title}
        </CardItem>
        <CardItem
          as="p"
          translateZ="60"
          className="mx-2 text-neutral-500 md:p-medium-16 p-medium-14 max-w-sm mt-2 truncate"
        >
         {description}
        </CardItem>
        <CardItem translateZ="100" className="w-full mt-4">
          <Image
            src={image}
            height="300"
            width="300"
            className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
            alt="thumbnail"
          />
        </CardItem>
        <div className="flex justify-between mt-4 md:p-medium-16 p-medium-14 text-neutral-500">
          {/* <CardItem
            translateZ={20}
            as="button"
            target="__blank"
            className="px-4 py-2 rounded-xl"
          >
           NextJs
          </CardItem>
          <CardItem
            translateZ={20}
            as="button"
            className="px-4 py-2 rounded-xl"
          >
            Tailwind
          </CardItem>
          <CardItem
            translateZ={20}
            as="button"
            className="px-4 py-2 rounded-xl"
          >
            Framer motion
          </CardItem> */}
          {
            languages.map((language, index)=>(<CardItem key={index}
              translateZ={20}
              as="button"
              className="px-4 py-2 rounded-xl"
            >
              {language}
            </CardItem> ))
          }

          <CardItem
            translateZ={20}
            as="button"
            className="px-4 py-2 rounded-xl justify-end relative"
          >
           <a href={link} target="_blank">
            <Globe></Globe>
           </a>
       
          </CardItem>

        </div>
      </CardBody>
    </CardContainer>
  );
}
