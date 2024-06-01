import AcmeLogo from '@/app/ui/acme-logo';
import { ArrowRightIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import { lusitana } from '@/app/ui/fonts';
import Header from './header';
import SideNav from './ui/dashboard/sidenav';
import Product from './products';

export default function Page() {

  return (
    <main className="flex-row">

      <div className="flex-row">
        <Header/>
      </div>
      <div className='flex-row flex'>
        <div className="w-1/6">
       <SideNav/>

        </div>{
        <div className="w-4/6">
        
            <Product></Product>
          
        </div>}
        <div className='w-1/6'>
        <SideNav/>
        </div>
      </div>
      <div className={` ${lusitana.className} flex-row mt-4 text-center bg-black text-white`}>
        A place where all the current trending and userful products are listed.
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
