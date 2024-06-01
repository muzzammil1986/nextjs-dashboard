import AcmeLogo from '@/app/ui/acme-logo';
import { ArrowRightIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import { lusitana } from '@/app/ui/fonts';
import Header from './header';
import SideNav from './ui/dashboard/sidenav';
import Product from './products';

export default function Page() {
  return (
    <main className="flex min-h-screen grid grid-rows-6 grid-flow-row">
      <div className="flex row-start-1 row-span-1">
        <Header/>
      </div>
      <div className='flex-row flex-wrap row-start-2 row-span-4 mt-4'>
        <div className="w-1/6 h-full float-left bg-blue-500 text-wrap  word-wrap  break-all">
          <SideNav/>
        </div>{
        <div className="w-4/6 h-full float-left bg-blue-300 justify-center">
          <div className="grid h-full grid-rows-7 grid-cols-1"> 
         
        
            <div className="bg-blue-100 background: green"><Product></Product></div>
             


         
         
          </div>
        </div>}
        <div className='w-1/6 h-full float-right bg-red-500'>
        <SideNav/>
        </div>
      </div>
      <div className="flex mt-4 row-start-6 row-span-1 bg-blue-500">
        Footer
      {/* <div className="flex flex-col justify-center gap-6 rounded-lg bg-gray-50 px-6 py-10 md:w-2/5 md:px-20">
          <p className={`text-xl text-gray-800 md:text-3xl md:leading-normal`}>
            <strong>Welcome to Acme.</strong> This is the example for the{' '}
            <a href="https://nextjs.org/learn/" className="text-blue-500">
              Next.js Learn Course
            </a>
            , brought to you by Vercel.
			
			
          </p>
		  
          <Link
            href="/login"
            className="flex items-center gap-5 self-start rounded-lg bg-blue-500 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-blue-400 md:text-base"
          >
            <span>Log in</span> <ArrowRightIcon className="w-5 md:w-6" />
          </Link>
        </div> 
        <div className="flex items-center justify-center p-6 md:w-3/5 md:px-28 md:py-12">
          {// Add Hero Images Here }
          </div> */ }
      </div>
    </main>
  );
}
