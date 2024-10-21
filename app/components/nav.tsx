import Link from 'next/link'
import { IoCalendarSharp, IoHomeSharp, IoPencilSharp } from "react-icons/io5";

const navItems = {
  '/': {
    name: 'home',
    icon: <IoHomeSharp />,
  },
  '/blog': {
    name: 'blog',
    icon: <IoPencilSharp />,
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
          <div className="flex flex-row space-x-0 pr-10 w-full">
            {Object.entries(navItems).map(([path, { icon }]) => {
              return (
                <Link
                  key={path}
                  href={path}
                  className="transition-all hover:text-neutral-800 hover:scale-150 dark:hover:text-neutral-200 flex align-middle relative py-1 px-2 m-1"
                >
                  {icon}
                </Link>
              )
            })}
            <a target='_blank' className="transition-all self-end hover:text-neutral-800 dark:hover:text-neutral-200 flex align-middle justify-end items-center flex-auto py-1 px-2 m-1 space-x-4" href="https://www.cal.com/matthewstronge"><IoCalendarSharp /> <span className='font-bold'>Schedule a call</span></a>
          </div>
        </nav>
      </div>
    </aside>
  )
}
