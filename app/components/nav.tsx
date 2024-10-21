import Link from 'next/link'
import { IoCalendarSharp, IoHomeSharp, IoPencilSharp } from "react-icons/io5";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const navItems = {
  '/': {
    name: 'home',
    icon: <IoHomeSharp />,
  },
  '/blog': {
    name: 'blog',
    icon: <IoPencilSharp />,
  },
  'https://www.github.com/mstronge': {
    name: 'github',
    target: '_blank',
    icon: <FaGithub />,
  },
  'https://www.linkedin.com/in/matt-stronge': {
    name: 'linkedin',
    target: '_blank',
    icon: <FaLinkedin />,
  },
  'https://www.instagram.com/matthewstronge': {
    name: 'instagram',
    target: '_blank',
    icon: <FaInstagram />,
  },
  'https://x.com/strongematthew': {
    name: 'x',
    target: '_blank',
    icon: <FaXTwitter />,
  },
}

export function Navbar() {
  return (
    <aside className="-ml-[8px] mb-16 tracking-tight">
      <div className="lg:sticky lg:top-20">
        <nav
          className="flex w-full relative px-0 pb-0 fade md:overflow-auto scroll-pr-6 md:relative"
          id="nav"
        >
          <div className="flex flex-row space-x-0 w-full">
            {Object.entries(navItems).map(([path, { icon, target }]) => {
              return (
                <Link
                  key={path}
                  href={path}
                  target={target}
                  className="transition-all items-center hover:text-neutral-800 hover:scale-150 dark:hover:text-neutral-200 flex align-middle relative py-1 px-2 m-1"
                >
                  {icon}
                </Link>
              )
            })}
            <a target='_blank' className="transition-all self-end hover:text-neutral-800 dark:hover:text-neutral-200 flex align-middle justify-end items-center flex-auto py-1 px-2 m-1 space-x-4" href="https://cal.com/matthewstronge?redirect=false"><IoCalendarSharp /> <span className='font-bold hidden sm:block'>Schedule a call</span></a>
          </div>
        </nav>
      </div>
    </aside>
  )
}
