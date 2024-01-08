'use client';
import { SelectDropDown } from '@/components/SelectDropDown';
import Image from 'next/image';
import { useState } from 'react';
import GalleryBg from '../../../public/galleryBg.png';

const category = [
  { id: 1, name: 'Kitchen' },
  { id: 2, name: 'Bedroom' },
  { id: 3, name: 'Computer' },
  { id: 4, name: 'Desk' },
];

const Page = () => {
  const [selectedCategory, setSelectedCategory] = useState(category[0]);
  const [selectedDesign, setSelectedDesign] = useState(category[0]);
  const [selectedMaterial, setSelectedMaterial] = useState(category[0]);
  const [selectedPrice, setSelectedPrice] = useState(category[0]);
  return (
    <div className=''>
      <Image src={GalleryBg} alt='Empower Logo' style={{ width: '100%' }} />
      <div className='container mx-auto'>
        <SelectDropDown
          className='mb-4 mt-4'
          label={'Category'}
          category={category}
          setSelectedCategory={setSelectedCategory}
          selectedCategory={selectedCategory}
        />
        <SelectDropDown
          className='mb-4'
          label={'Design Type'}
          category={category}
          setSelectedCategory={setSelectedDesign}
          selectedCategory={selectedDesign}
        />
        <SelectDropDown
          className='mb-4'
          label={'Material'}
          category={category}
          setSelectedCategory={setSelectedMaterial}
          selectedCategory={selectedMaterial}
        />
        <SelectDropDown
          className='mb-4'
          label={'Price'}
          category={category}
          setSelectedCategory={setSelectedPrice}
          selectedCategory={selectedPrice}
        />
      </div>
    </div>
  );
};

export default Page;
