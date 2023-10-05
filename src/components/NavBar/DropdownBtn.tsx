import { Fragment, useState } from 'react';
import { Listbox, Transition } from '@headlessui/react';
import Link from 'next/link';
import { frontendLinks } from '@/config/common/app-link';
import {useRouter} from "next/navigation";

const routes = [
  { name: 'Home', href: frontendLinks.HOME },
  { name: 'Simple Project', href: frontendLinks.SIMPLE_PROJECT },
  { name: 'Complex Project', href: frontendLinks.COMPLEX_PROJECT },
];

export default function DropdownBtn() {
  const router = useRouter()
  const [selected, setSelected] = useState(routes[0]);
  const handleClick = (href:string)=>{
    router.push(href)
  }
  return (
        <Listbox value={selected} onChange={setSelected}>
          {/*<div className="relative">*/}
            <Listbox.Button className='button bg-transparent pl-0 font-raleway active:text-brand before:block before:absolute before:-inset-1 before:border-b-2 before:border-transparent hover:before:border-brand before:w-1/2 relative  py-2 px-4  items-center gap-3 text-lg text-brand'>
              <span className='block truncate'>{selected.name}</span>
            </Listbox.Button>
            <Transition
                as={Fragment}
                leave="transition ease-in duration-100"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
            >
              <Listbox.Options className="absolute top-16 z-30 mt-1 max-h-60 overflow-auto rounded-md bg-white text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
              {routes.map((route, personIdx) => (
                  <Listbox.Option
                    key={personIdx}
                    onClick={()=>handleClick(route.href)}
                    className={({ active }) =>
                      `relative cursor-pointer select-none py-2 pl-10 pr-4 ${
                        active ? 'bg-brand text-white' : 'text-gray-900'
                      }`
                    }
                    value={route}
                  >
                    {({ selected }) => (
                      <>
                        <span
                          className={`block truncate ${
                            selected ? 'font-medium' : 'font-normal'
                          }`}
                        >{route.name}
                        </span>
                        {/*    {selected ? (*/}
                        {/*        <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-amber-600">*/}
                        {/*  <CheckIcon className="h-5 w-5" aria-hidden="true" />*/}
                        {/*</span>*/}
                        {/*    ) : null}*/}
                      </>
                    )}
                  </Listbox.Option>
                ))}
              </Listbox.Options>
            </Transition>
          {/*</div>*/}
        </Listbox>
  );
}
