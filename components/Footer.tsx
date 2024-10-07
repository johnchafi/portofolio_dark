import React from 'react'
//import MagicButton from './ui/MagicButton'
import { Button } from './ui/button';
import { LocateIcon } from 'lucide-react';
import { socialMedia } from '@/constants';

const Footer = () => {
    return (
      <footer className="w-full pb-2 md:p-medium-16 p-medium-14 text-neutral-700 dark:text-neutral-400 " id="Footer">
        {/* background grid */}
  
        <div className="flex flex-col items-center">
          <h2 className="text-center md:h2-bold h3-medium lg:max-w-[45vw]">
            Ready to take <span className="text-purple-300">your digital </span> 
            presence to the next level?
          </h2>
          <p className="text-white-200 md:mt-10 my-5 text-center">
            Reach out to me today and let&apos;s discuss how I can help you
            achieve your goals.
          </p>
          <a href="mailto:johnchafi@gmail.com">
            <Button
              title="Let's get in touch"
            >
              <LocateIcon />
            </Button>
          </a>
        </div>
        <div className="flex mt-16 md:flex-row flex-col justify-between items-center">
          <p className="md:text-base text-sm md:font-normal font-light">
            Copyright © 2024 Jean de Dieu Uwimana
          </p>
  
          <div className="flex items-center md:gap-3 gap-6">
            {socialMedia.map((info) => (
              <div
                key={info.id}
                className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300"
              >
                <img src={info.img} alt="icons" width={20} height={20} />
              </div>
            ))}
          </div>
        </div>
      </footer>
    );
  };
  
  export default Footer;