import { Text } from '@/ui/Text';
import { Listbox } from '@headlessui/react';
import { FaAngleDown } from 'react-icons/fa';

interface CategoryItem {
  id: number;
  name: string;
}

interface SelectDropDownI extends React.HTMLProps<HTMLDivElement> {
  label: string;
  category: CategoryItem[];
  selectedCategory: CategoryItem;
  setSelectedCategory?: (category: CategoryItem) => void;
}
export const SelectDropDown: React.FC<SelectDropDownI> = ({
  category,
  label,
  selectedCategory,
  setSelectedCategory,
  className,
  ...props
}) => {
  const combinedClassName = `relative ${className || ''}`;
  return (
    <div className={combinedClassName} {...props}>
      <Text>{label}</Text>
      <Listbox value={selectedCategory} onChange={setSelectedCategory}>
        <Listbox.Button className='flex w-full  items-center gap-x-4 rounded-md border border-[#504845] p-4  text-xl hover:opacity-80'>
          <div className='flex w-full items-center justify-between'>
            {selectedCategory.name} <FaAngleDown />
          </div>
        </Listbox.Button>
        <Listbox.Options
          className={'absolute top-[-4] z-10 w-full rounded-md bg-secondary'}
        >
          {category.map((g) => (
            <Listbox.Option key={g.id} value={g} className={'m-2'}>
              <Text
                className={
                  selectedCategory.name === g.name
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
  );
};
