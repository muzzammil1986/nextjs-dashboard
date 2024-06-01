'use client';
import { lusitana, dancingScript } from '@/app/ui/fonts';

import { GlobeAltIcon } from '@heroicons/react/24/outline';

export default function Header() {

  return (
    <>
    
    <div className={`text-center bg-blend-darken justify-center flex bg-black text-white pb-4`}>
    <GlobeAltIcon className="h-12 w-12 rotate-[15deg] hidden" />
    <strong className={`${dancingScript.className} text-5xl `}>Creative and Trending Products</strong>
    
    <ul className="flex justify-center">
      <li className="mr-6 hidden">Home</li>
    </ul>
    </div>
    </>
  );
}
