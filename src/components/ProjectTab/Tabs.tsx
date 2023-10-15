import React, { ReactElement, useState } from 'react';
import { Tab } from '@headlessui/react';
import { Button } from '@/ui/Button';

interface TabElements {
  [key: string]: ReactElement;
}

interface ITab {
  tabElements: TabElements;
  tabClassName?: string;
  tabBtnClassName?: string;
}

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ');
}

const TabButton = ({
  selected,
  category,
  tabBtnClassName = 'flex items-center gap-3 text-xl font-medium',
}: {
  selected: boolean;
  category: string;
  tabBtnClassName?: string;
}) => {
  return (
    <Button
      intent='tertiary'
      className={
        selected
          ? `${tabBtnClassName} text-brand before:border-brand`
          : ` ${tabBtnClassName} text-black `
      }
    >
      {category}
    </Button>
  );
};
export default function Tabs({
  tabElements,
  tabClassName,
  tabBtnClassName = 'flex items-center gap-3 text-xl font-medium',
}: ITab) {
  let [categories] = useState(tabElements);

  return (
    <div className='flex w-full flex-col items-center justify-center px-2 sm:px-0'>
      <Tab.Group>
        <Tab.List
          className={
            tabClassName ?? 'flex space-x-1 rounded-xl bg-transparent p-1'
          }
        >
          {Object.keys(categories).map((category) => (
            <Tab
              as='div'
              key={category}
              className='ring-white ring-opacity-0 ring-offset-0 ring-offset-blue-400 focus:outline-none focus:ring-1'
            >
              {({ selected }) => (
                <TabButton
                  tabBtnClassName={tabBtnClassName}
                  selected={selected}
                  category={category}
                />
              )}
            </Tab>
          ))}
        </Tab.List>
        <Tab.Panels className='mt-2 w-full'>
          {Object.values(categories).map((component, idx) => (
            <Tab.Panel key={idx}>{component}</Tab.Panel>
          ))}
        </Tab.Panels>
      </Tab.Group>
    </div>
  );
}
