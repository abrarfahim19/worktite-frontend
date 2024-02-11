'use client';
import { useState } from 'react';
import { SelectDropDown } from '../SelectDropDown';

const category = [
  { id: 1, name: 'Kitchen' },
  { id: 2, name: 'Bedroom' },
  { id: 3, name: 'Computer' },
  { id: 4, name: 'Desk' },
];
export const GalleryDropdown = () => {
  const [selectedCategory, setSelectedCategory] = useState(category[0]);
  const [selectedDesign, setSelectedDesign] = useState(category[0]);
  const [selectedMaterial, setSelectedMaterial] = useState(category[0]);
  const [selectedPrice, setSelectedPrice] = useState(category[0]);
  return (
    <div className='container mx-auto px-4'>
      <div className='mt-4 grid grid-cols-1 gap-2 md:grid-cols-4 md:gap-4'>
        <SelectDropDown
          className=''
          label={'Category'}
          category={category}
          setSelectedCategory={setSelectedCategory}
          selectedCategory={selectedCategory}
        />
        <SelectDropDown
          className=''
          label={'Design Type'}
          category={category}
          setSelectedCategory={setSelectedDesign}
          selectedCategory={selectedDesign}
        />
        <SelectDropDown
          className=''
          label={'Material'}
          category={category}
          setSelectedCategory={setSelectedMaterial}
          selectedCategory={selectedMaterial}
        />
        <SelectDropDown
          className=''
          label={'Price'}
          category={category}
          setSelectedCategory={setSelectedPrice}
          selectedCategory={selectedPrice}
        />
      </div>
    </div>
  );
};
