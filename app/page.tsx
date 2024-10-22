import { BlogPosts } from 'app/components/posts'
import Image from 'next/image';
import me from '../public/images/matthew-stronge-small.png'
import amplir from '../public/images/amplir.png'
import sup from '../public/images/sup.webp'
import teach from '../public/images/teachio.png'
import { FaLink } from 'react-icons/fa';
import { IoGitBranch } from 'react-icons/io5';
import Link from 'next/link';

  export default function Page() {
    return (
      <section>
        <div className="flex flex-col justify-center align-middle mb-12 md:flex-row">
          <Image alt="Matthew Stronge" src={me} className='w-36 h-36 rounded-full' />
          <div className='pl-0 pt-8 sm:pl-12 sm:pt-0 space-y-1'>
            <h1 className="mb-4 text-4xl m-0 p-0 font-semibold">
            Matthew Stronge
            </h1>
            <h2 className="mb-4 text-xl font-semibold">
              Father, software engineer and founder/CEO.</h2>
            <p className="mb-0 pb-0 text-gray-400">  I build things with NodeJS/React/Javascript. <em>Sometimes</em> I write about <strong className='text-neutral-100'>Javascript</strong>, <strong className='text-neutral-100'>AI</strong> and its utilisation within <strong className='text-neutral-100'>financial and legal technology.</strong>.
            </p>
          </div>
        </div>

      <div className="my-8 mb-16">
        <h2 className="mb-4 text-xl font-semibold">Blog</h2>
        <BlogPosts />
      </div>

      <div className="my-8 space-y-8 mb-16">
      <h2 className="mb-4 text-xl font-semibold">Recent work</h2>
      <div className="flex">
        <div className="min-w-48">
          <Image alt='Sup.co' src={sup}  className='max-w-20' />
        </div>
        <div>
          <h2 className='font-bold'>Sup.co</h2>
          <p className="text-gray-400 mb-4">a Remix application integrating with the Meta Graph API to allow small business to connect directly to influencers and drive product sales.</p>
          <Link target='_blank' href="https://www.sup.co"><FaLink /></Link>
        </div>
      </div>
      <div className="flex">
        <div className="min-w-48">
          <Image alt='Teach.io' src={teach}  className='max-w-24' />
        </div>
        <div>
          <h2 className='font-bold'>Teach.io</h2>
          <p className="text-gray-400 mb-4">a NodeJS/React based e-learning platform with Zoom, Stripe and Zapier integration.</p>
          <Link target='_blank' href="https://www.teach.io"><FaLink /></Link>
        </div>
      </div>
      </div>

      <div className="my-8 mb-16">
        <h2 className="mb-4 text-xl font-semibold">Companies</h2>
        <div className="flex">
          <div className='min-w-48'>
            <Image alt="Amplir" src={amplir} className='max-w-32' />
            <div className="flex mt-4 space-x-4">
            <Link target='_blank' href="https://www.amplir.com"><FaLink /></Link>
          </div>
          </div>
          <div>
            <p className="text-gray-400"><strong className='text-neutral-100'>Amplir</strong>  is a legal tech platform designed to empower individuals by giving them more control and transparency in managing their legal cases. By leveraging AI to enhance insights and streamline processes, we help to modernise the justice system, making legal advice more accessible and effective for all.</p>
          </div>

        </div>

      </div>

      <div className="my-8">
        <h2 className="mb-4 text-xl font-semibold">Open source</h2>
        <div className='flex'>
          <div className='min-w-48'>
          <h3><strong>Fixparser</strong></h3>
          <p className='uppercase text-gray-400 tracking-wider text-xs'>Contributor</p>
          <div className="flex mt-4 space-x-4">
            <Link target="_blank" href="https://fixparser.dev"><FaLink /></Link>
            <Link target="_blank" href="https://logotype.gitlab.io/fixparser/"><IoGitBranch /></Link>
          </div>
          </div>
          <div>
            <p className="text-gray-400">This is the TypeScript framework for working with FIX protocol messages. Compliant with FIX.Latest / FIX 5.0 SP2.  The Financial Information eXchange (FIX) protocol is an electronic communications protocol initiated in 1992 for international real-time exchange of information related to the securities transactions and markets.</p>
          </div>

        </div>
      </div>

      </section>
    )
  }
