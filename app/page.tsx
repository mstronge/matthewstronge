import { BlogPosts } from 'app/components/posts'
import Image from 'next/image';
import me from '../public/images/matthew-stronge-small.png'

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
          <p className="mb-0 pb-0">  I build things with NodeJS/React/Javascript. <em>Sometimes</em> I write about <strong>Javascript</strong>, <strong>AI</strong> and its utilisation within <strong>financial technology.</strong></p>
        </div>
      </div>

      <div className="my-8">
        <BlogPosts />
      </div>
    </section>
  )
}
