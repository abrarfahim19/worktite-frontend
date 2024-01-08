'use client';

import { Avatar } from '@/ui/Avatar';
import { Button } from '@/ui/Button';
import { Input } from '@/ui/Input';
import { Text } from '@/ui/Text';
import { Dialog, Listbox, Menu, Tab } from '@headlessui/react';
import { useState } from 'react';
import { CiMenuKebab } from 'react-icons/ci';
import { FaAngleDown } from 'react-icons/fa';
import { MdOutlineCancel } from 'react-icons/md';

const links = [
  { href: '/general', label: 'General' },
  { href: '/account', label: 'Account' },
  { href: '/password', label: 'Password' },
  { href: '/delete_account', label: 'Delete account' },
];

const gender = [
  { id: 1, name: 'Male' },
  { id: 2, name: 'Female' },
];

const Page = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [selectedGender, setSelectedGender] = useState(gender[0]);
  const [isOpen, setIsOpen] = useState(false);
  const modalOpen = () => {
    setIsOpen(true);
  };
  const modalClose = () => {
    setIsOpen(false);
  };

  return (
    <div className='container mx-auto my-4 rounded-md bg-white px-4 font-raleway md:bg-transparent'>
      <div className='md:hidden'>
        <Tab.Group selectedIndex={selectedIndex} onChange={setSelectedIndex}>
          <div className='mb-4 flex items-center justify-between pt-2'>
            <Text tag={'p'} className='font-bold text-brand'>
              {links[selectedIndex].label}
            </Text>
            <div className='relative'>
              <Menu>
                <Menu.Button>
                  <CiMenuKebab />
                </Menu.Button>
                <Menu.Items>
                  <Tab.List
                    className={
                      'absolute right-0 z-30 flex w-48 flex-col justify-around rounded-md bg-secondary p-4'
                    }
                  >
                    {links.map((link) => (
                      <Tab key={link.href} className={'my-2 mr-4 self-start'}>
                        {({ selected }) => (
                          <Text
                            className={selected ? `text-brand` : 'text-black'}
                          >
                            {link.label}
                          </Text>
                        )}
                      </Tab>
                    ))}
                  </Tab.List>
                </Menu.Items>
              </Menu>
            </div>
          </div>
          <div className='bg-white'>
            <Tab.Panels>
              <Tab.Panel>
                <Input
                  label='Username'
                  placeholder='Mark John'
                  className='my-4'
                />
                <Input label='E-mail' placeholder='markjohn@gmail.com' />
                <Button
                  className='onClick={modalClose} my-4'
                  onClick={modalOpen}
                >
                  Save Changes
                </Button>
              </Tab.Panel>
              <Tab.Panel>
                <div className='mb-4 flex items-center'>
                  <Avatar
                    size='medium'
                    decoration={'ring'}
                    imageUrl='https://picsum.photos/300/300'
                  />
                  <Button
                    intent={'outlined'}
                    className='ml-4'
                    onClick={modalOpen}
                  >
                    Change
                  </Button>
                </div>
                <Input label='Name' placeholder='Mark John' className='mb-4' />
                {/* <Input label='Gender' placeholder='Mark John' className='mb-4' /> */}
                <div className='relative mb-4'>
                  <Text>Gender</Text>
                  <Listbox value={selectedGender} onChange={setSelectedGender}>
                    <Listbox.Button className='flex w-full  items-center gap-x-4 rounded-md border border-[#504845] p-4  text-xl hover:opacity-80'>
                      <div className='flex w-full items-center justify-between'>
                        {selectedGender.name} <FaAngleDown />
                      </div>
                    </Listbox.Button>
                    <Listbox.Options
                      className={
                        'absolute top-[-4] z-10 w-full rounded-md bg-secondary'
                      }
                    >
                      {gender.map((g) => (
                        <Listbox.Option key={g.id} value={g} className={'m-2'}>
                          <Text
                            className={
                              selectedGender.name === g.name
                                ? 'cursor-pointer text-brand'
                                : 'cursor-pointer text-black'
                            }
                          >
                            {g.name}
                          </Text>
                        </Listbox.Option>
                      ))}
                    </Listbox.Options>
                  </Listbox>
                </div>
                <Input
                  label='E-Mail'
                  placeholder='Mark John'
                  className='mb-4'
                />
                <Input
                  label='Contact Number'
                  placeholder='Mark John'
                  className='mb-4'
                />
                <Input
                  label='Company Name (Optional)'
                  placeholder='Mark John'
                  className='mb-4'
                />
                <Input
                  label='VAT Number'
                  placeholder='Mark John'
                  className='mb-4'
                />
                <Input
                  label='Contact Name'
                  placeholder='Mark John'
                  className='mb-4'
                />
                <Input
                  label='Billing e-mail'
                  placeholder='Mark John'
                  className='mb-4'
                />
                <Input
                  label='Mailing address (if different)'
                  placeholder='Mark John'
                />

                <Button className='my-4' onClick={modalOpen}>
                  Save Changes
                </Button>
              </Tab.Panel>
              <Tab.Panel>
                <Input
                  label='Current Password'
                  className='mb-4'
                  placeholder='****'
                  type='password'
                />
                <Input
                  label='New Password'
                  className='mb-4'
                  placeholder='****'
                  type='password'
                />
                <Input
                  label='Confirm Password'
                  className='mb-4'
                  placeholder='****'
                  type='password'
                />
                <Button className='my-4' onClick={modalOpen}>
                  Save Changes
                </Button>
              </Tab.Panel>
              <Tab.Panel>
                <div className='w-full bg-white'>
                  <Text className='mb-5 font-bold'>
                    Are you sure you want to delete your account?
                  </Text>
                  <Input placeholder='Delete my account' />
                  <Text className='mt-2'>
                    Type the following: Delete my account
                  </Text>
                  <Button className='my-5' onClick={modalOpen}>
                    Delete
                  </Button>
                </div>
              </Tab.Panel>
            </Tab.Panels>
          </div>
        </Tab.Group>
      </div>
      {/* Desktop View */}
      <div className='hidden md:block'>
        <div className='flex'>
          <Tab.Group selectedIndex={selectedIndex} onChange={setSelectedIndex}>
            <div className='mr-4 mt-8 flex w-1/3 items-center justify-between self-start rounded-xl bg-secondary'>
              <Tab.List className={'ml-6 flex flex-col'}>
                {links.map((link) => (
                  <Tab key={link.href} className={'my-4 ml-4 self-start'}>
                    {({ selected }) => (
                      <Text
                        tag={'h5'}
                        className={`${
                          selected ? `text-brand` : 'text-black'
                        } text-xl`}
                      >
                        {link.label}
                      </Text>
                    )}
                  </Tab>
                ))}
              </Tab.List>
            </div>
            <div className='mt-8 w-full'>
              <Tab.Panels>
                <Tab.Panel>
                  <Input
                    label='Username'
                    placeholder='Mark John'
                    className='my-4'
                  />
                  <Input label='E-mail' placeholder='markjohn@gmail.com' />
                  <Button className='my-4' onClick={modalOpen}>
                    Save Changes
                  </Button>
                </Tab.Panel>
                <Tab.Panel>
                  <div className='mb-4 flex items-center'>
                    <Avatar
                      size='large'
                      decoration={'ring'}
                      imageUrl='https://picsum.photos/300/300'
                    />
                    <Button
                      intent={'outlined'}
                      size={'large'}
                      className='ml-4 font-bold'
                      onClick={modalOpen}
                    >
                      Change
                    </Button>
                  </div>
                  <div className='grid grid-cols-2 gap-x-4'>
                    <Input
                      label='Name'
                      placeholder='Mark John'
                      className='mb-4'
                    />
                    {/* <Input label='Gender' placeholder='Mark John' className='mb-4' /> */}
                    <div className='relative mb-4'>
                      <p className='text-black'>Gender</p>
                      <Listbox
                        value={selectedGender}
                        onChange={setSelectedGender}
                      >
                        <Listbox.Button className='flex w-full  items-center gap-x-4 rounded-md border border-[#504845] p-4 text-xl hover:opacity-80'>
                          <div className='flex w-full items-center justify-between'>
                            {selectedGender.name} <FaAngleDown />
                          </div>
                        </Listbox.Button>
                        <Listbox.Options
                          className={
                            'absolute top-[-4] z-10 w-full rounded-md bg-secondary'
                          }
                        >
                          {gender.map((g) => (
                            <Listbox.Option
                              key={g.id}
                              value={g}
                              className={'m-2'}
                            >
                              <Text
                                className={
                                  selectedGender.name === g.name
                                    ? 'cursor-pointer text-brand'
                                    : 'cursor-pointer text-black'
                                }
                              >
                                {g.name}
                              </Text>
                            </Listbox.Option>
                          ))}
                        </Listbox.Options>
                      </Listbox>
                    </div>
                    <Input
                      label='E-Mail'
                      placeholder='Mark John'
                      className='mb-4'
                    />
                    <Input
                      label='Contact Number'
                      placeholder='Mark John'
                      className='mb-4'
                    />
                    <Input
                      label='Company Name (Optional)'
                      placeholder='Mark John'
                      className='mb-4'
                    />
                    <Input
                      label='VAT Number'
                      placeholder='Mark John'
                      className='mb-4'
                    />
                    <Input
                      label='Contact Name'
                      placeholder='Mark John'
                      className='mb-4'
                    />
                    <Input
                      label='Billing e-mail'
                      placeholder='Mark John'
                      className='mb-4'
                    />
                    <div className='col-span-2'>
                      <Input
                        label='Mailing address (if different)'
                        placeholder='Mark John'
                      />
                    </div>
                  </div>

                  <Button className='my-4' onClick={modalOpen}>
                    Update
                  </Button>
                </Tab.Panel>
                <Tab.Panel>
                  <Input
                    label='Current Password'
                    className='mb-4'
                    placeholder='****'
                    type='password'
                  />
                  <Input
                    label='New Password'
                    className='mb-4'
                    placeholder='****'
                    type='password'
                  />
                  <Input
                    label='Confirm Password'
                    className='mb-4'
                    placeholder='****'
                    type='password'
                  />
                  <Button className='my-4' onClick={modalOpen}>
                    Save Changes
                  </Button>
                </Tab.Panel>
                <Tab.Panel>
                  <div className='w-full '>
                    <Text className='mb-5 font-bold'>
                      Are you sure you want to delete your account?
                    </Text>
                    <Input placeholder='Delete my account' />
                    <Text className='mt-2'>
                      Type the following: Delete my account
                    </Text>
                    <Button className='my-5' onClick={modalOpen}>
                      Delete
                    </Button>
                  </div>
                </Tab.Panel>
              </Tab.Panels>
            </div>
          </Tab.Group>
        </div>
      </div>
      <Dialog open={isOpen} onClose={modalClose} className='relative z-50'>
        <div className='fixed inset-0 flex w-screen items-center justify-center p-4'>
          <Dialog.Panel className='w-full max-w-md rounded-xl bg-secondary'>
            <Dialog.Title
              className={
                'm-4 flex items-center justify-between text-xl font-semibold'
              }
            >
              <p className='font-raleway'>Save changes</p>
              <button onClick={modalClose}>
                <MdOutlineCancel />
              </button>
            </Dialog.Title>
            <Dialog.Description className={'m-4 font-raleway font-medium'}>
              Are you sure you want to save this changes?
              <div className='mt-4'>
                <Button className='mr-4'>Update</Button>
                <Button intent={'secondary'} className=''>
                  Cancel
                </Button>
              </div>
            </Dialog.Description>
          </Dialog.Panel>
        </div>
      </Dialog>
    </div>
  );
};

export default Page;
