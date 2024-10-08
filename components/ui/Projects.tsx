"use client";

import Image from "next/image";
import React from "react";
import { CardBody, CardContainer, CardItem } from "../ui/3d-card";
import Link from "next/link";

export function Project() {
  return (
    <CardContainer className="iter-var">
      <CardBody className="w-full bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1]  sm:w-[30rem] h-auto rounded-xl border">
        <CardItem
          translateZ="50"
          className="mx-2  md:p-medium-16 p-medium-14"
        >
          Evently
        </CardItem>
        <CardItem
          as="p"
          translateZ="60"
          className="mx-2 text-neutral-500 md:p-medium-16 p-medium-14 max-w-sm mt-2"
        >
          Event & Ticketing Platform for hosting events.
        </CardItem>
        <CardItem translateZ="100" className="w-full mt-4">
          <Image
            src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=2560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            height="300"
            width="300"
            className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
            alt="thumbnail"
          />
        </CardItem>
        <div className="flex mt-4 md:p-medium-16 p-medium-14 text-neutral-500">
          <CardItem
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
          </CardItem>
        </div>
      </CardBody>
    </CardContainer>
  );
}
