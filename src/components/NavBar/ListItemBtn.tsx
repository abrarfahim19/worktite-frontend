import { Fragment, useState } from 'react';
import { Listbox, Transition } from '@headlessui/react';
import Link from 'next/link';
import { frontendLinks } from '@/config/common/app-link';
import { useRouter, usePathname } from 'next/navigation';
import { Button } from '@/ui/Button';
import { ClassPropertiess } from '@/ui/common/interface';

const routes = [
  { name: 'Home', href: frontendLinks.HOME },
  { name: 'Simple Project', href: frontendLinks.SIMPLE_PROJECT },
  { name: 'Complex Project', href: frontendLinks.COMPLEX_PROJECT },
];

const customClass: ClassPropertiess = {
  listBoxClass:
    'button relative items-center gap-3 bg-transparent px-4 py-2 pl-0 font-raleway text-lg text-brand before:absolute before:-inset-1  before:block before:w-1/2  before:border-b-2 before:border-transparent hover:before:border-brand active:text-brand',
  listBoxOptionsClass:
    'absolute top-16 z-30 mt-1 flex max-h-60 flex-col overflow-auto rounded-md bg-white text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm',
  listBoxOptionBtnClass: (active: boolean) =>
    `relative w-full cursor-pointer select-none py-2 pl-10 pr-4 ${
      active ? 'bg-brand text-white' : 'text-gray-900'
    }`,
  listBoxBtnSpanClass: 'block truncate',
};

const TransitionProperty = {
  leave: 'transition ease-in duration-100',
  leaveFrom: 'opacity-100',
  leaveTo: 'opacity-0',
};

export default function ListItemBtn() {
  const pathName = usePathname();
  const [selected, setSelected] = useState(
    () => routes.filter((route) => route.href === pathName)[0] ?? routes[0]
  );
  return (
    <Listbox value={selected} onChange={setSelected}>
      <Listbox.Button className={customClass.listBoxClass}>
        <span className={customClass.listBoxBtnSpanClass}>{selected.name}</span>
      </Listbox.Button>
      <Transition as={Fragment} {...TransitionProperty}>
        <Listbox.Options className={customClass.listBoxOptionsClass}>
          {routes.map((route, personIdx) => (
            <Listbox.Option as={Fragment} key={personIdx} value={route}>
              {({ active, selected }) => (
                <Button
                  intent='normal'
                  size='normal'
                  as='link'
                  href={route.href}
                  className={customClass.listBoxOptionBtnClass(active)}
                >
                  {route.name}
                </Button>
              )}
            </Listbox.Option>
          ))}
        </Listbox.Options>
      </Transition>
    </Listbox>
  );
}
