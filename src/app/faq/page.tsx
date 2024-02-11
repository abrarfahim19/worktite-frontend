'use client';
import StyleHeading from '@/components/Header/StyleHeading';
import { Disclosure, Tab } from '@headlessui/react';
import Image from 'next/image';
import { Fragment } from 'react';
import { IoChevronUpCircleOutline } from 'react-icons/io5';
import { MdOutlineSearch } from 'react-icons/md';
import FaqBg from '../../../public/faqBg.png';

const faqData = [
  {
    type: 'simple',
    faqs: [
      {
        query: 'Question about your free move',
        answer:
          'The primary idea of wood veneer originates in ancient Egypt circa 3000 BC and continues into modern day woodworking. Egypt consists mostly of desert, wood was rare and highly valued; therefore, ancient Egyptians saw logs into thin boards to utilize the material well.',
      },
      {
        query: 'Question about your free move',
        answer:
          'The primary idea of wood veneer originates in ancient Egypt circa 3000 BC and continues into modern day woodworking. Egypt consists mostly of desert, wood was rare and highly valued; therefore, ancient Egyptians saw logs into thin boards to utilize the material well.',
      },
    ],
  },
  {
    type: 'complex',
    faqs: [
      {
        query: 'Question about your free move',
        answer:
          'The primary idea of wood veneer originates in ancient Egypt circa 3000 BC and continues into modern day woodworking. Egypt consists mostly of desert, wood was rare and highly valued; therefore, ancient Egyptians saw logs into thin boards to utilize the material well.',
      },
      {
        query: 'Question about your free move',
        answer:
          'The primary idea of wood veneer originates in ancient Egypt circa 3000 BC and continues into modern day woodworking. Egypt consists mostly of desert, wood was rare and highly valued; therefore, ancient Egyptians saw logs into thin boards to utilize the material well.',
      },
    ],
  },
];

const Page = () => {
  return (
    <div className=''>
      <Image src={FaqBg} alt='Empower Logo' style={{ width: '100%' }} />
      <div className='container mx-auto px-4'>
        <StyleHeading
          title='FAQ'
          description=' Lorem, ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus tenetur dolorum vel sapiente culpa perferendis assumenda quaerat exercitationem! Ipsa, provident!'
        />
        <div className='flex flex-col-reverse items-start gap-4 md:flex-row md:justify-between'>
          <p className='font-semibold'>How can we help you?</p>
          <div className='flex items-center justify-center gap-2 border-b-2 border-gray-400 '>
            <MdOutlineSearch className='text-gray-800' />
            <input
              type='text'
              placeholder='Search'
              className='bg-transparent outline-none placeholder:text-gray-800'
            />
          </div>
        </div>
        {/* Tabs */}
        <div>
          <Tab.Group>
            <Tab.List className={'my-4 flex'}>
              <Tab as={Fragment}>
                {({ selected }) => (
                  <div className='relative mt-3 inline-block'>
                    <div
                      className={`absolute inset-x-0 -bottom-2 h-[2px] w-12 ${selected ? 'bg-brand' : 'bg-none'}`}
                    ></div>
                    <h3
                      className={`w-36 ${selected ? 'font-semibold text-brand' : 'text-black'}`}
                    >
                      Diy work project
                    </h3>
                  </div>
                )}
              </Tab>
              <Tab as={Fragment}>
                {({ selected }) => (
                  <div className='relative mt-3 inline-block'>
                    <div
                      className={`absolute inset-x-0 -bottom-2 h-[2px] w-12 ${selected ? 'bg-brand' : 'bg-none'}`}
                    ></div>
                    <h3
                      className={`w-36 ${selected ? 'font-semibold text-brand' : 'text-black'}`}
                    >
                      Complex Project
                    </h3>
                  </div>
                )}
              </Tab>
            </Tab.List>
            <Tab.Panels>
              <Tab.Panel>
                <div className='container mx-auto mb-4 w-full'>
                  <div className='mx-auto w-full rounded-2xl p-2'>
                    {faqData[0].faqs.map((item, index) => {
                      return (
                        <Disclosure key={index}>
                          {({ open }) => (
                            <>
                              <Disclosure.Button className='flex w-full justify-between rounded-lg px-4 py-4 text-left text-sm font-medium focus:outline-none focus-visible:ring focus-visible:ring-purple-500/75'>
                                <span>{item.query}</span>
                                <IoChevronUpCircleOutline
                                  className={`${
                                    open ? 'rotate-180 transform' : ''
                                  } h-5 w-5`}
                                />
                              </Disclosure.Button>
                              <Disclosure.Panel className='w-full px-4 pb-2 pt-4 text-sm text-gray-500 md:w-2/3'>
                                {item.answer}
                              </Disclosure.Panel>
                              {index !== faqData[0].faqs.length - 1 && (
                                <hr className={`my-2 w-full bg-gray-300`} />
                              )}
                            </>
                          )}
                        </Disclosure>
                      );
                    })}
                  </div>
                </div>
              </Tab.Panel>
              <Tab.Panel>
                <div className='container mx-auto mb-4 w-full'>
                  <div className='mx-auto w-full rounded-2xl p-2'>
                    {faqData[1].faqs.map((item, index) => {
                      return (
                        <Disclosure key={index}>
                          {({ open }) => (
                            <>
                              <Disclosure.Button className='flex w-full justify-between rounded-lg px-4 py-4 text-left text-sm font-medium focus:outline-none focus-visible:ring focus-visible:ring-purple-500/75'>
                                <span>{item.query}</span>
                                <IoChevronUpCircleOutline
                                  className={`${
                                    open ? 'rotate-180 transform' : ''
                                  } h-5 w-5`}
                                />
                              </Disclosure.Button>
                              <Disclosure.Panel className='w-full px-4 pb-2 pt-4 text-sm text-gray-500 md:w-2/3'>
                                {item.answer}
                              </Disclosure.Panel>
                              {index !== faqData[1].faqs.length - 1 && (
                                <hr className={`my-2 w-full bg-gray-300`} />
                              )}
                            </>
                          )}
                        </Disclosure>
                      );
                    })}
                  </div>
                </div>
              </Tab.Panel>
            </Tab.Panels>
          </Tab.Group>
        </div>
      </div>
    </div>
  );
};

export default Page;
