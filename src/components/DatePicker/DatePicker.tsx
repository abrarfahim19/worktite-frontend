import { Button } from '@/ui/Button';
import { Text } from '@/ui/Text';
import { format } from 'date-fns';
import { useState } from 'react';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';

const dates = [
  { id: 'afdafe', time: '8:00 - 9:00 PM', disabled: true },
  { id: 'afdafg', time: '9:00 - 10:00 PM', disabled: false },
  { id: 'afd3fe', time: '10:00 - 11:00 PM', disabled: false },
  { id: 'ard3fe', time: '11:00 - 12:00 PM', disabled: false },
  { id: 'afdafr', time: '9:00 - 10:00 PM', disabled: false },
  { id: 'afdrfe', time: '10:00 - 11:00 PM', disabled: false },
  { id: 'ardafe', time: '8:00 - 9:00 PM', disabled: true },
  { id: 'ard3re', time: '11:00 - 12:00 PM', disabled: false },
];

interface IAvailableDate {
  id: string;
  time: string;
  disabled: boolean;
}
export const DatePicker = () => {
  const [selected, setSelected] = useState<Date>();
  const [availableTime, setAvailableTime] = useState<IAvailableDate[]>(dates);
  const [scheduleSelected, setScheduleSelected] = useState<number>();

  const scheduleSelectionHandler = (index: number) => {
    if (scheduleSelected === index) {
      console.log('This is in list');
      // setScheduleSelected((prev) => prev.filter((item) => item !== index));
      setScheduleSelected(-1);
    } else {
      console.log('Not in list');
      // setScheduleSelected((prev) => prev.concat(index));
      setScheduleSelected(index);
    }
  };

  let footer = <p>Please pick a day.</p>;
  if (selected) {
    footer = <p>You picked {format(selected, 'PP')}.</p>;
  }
  return (
    <div className='bg-white p-10'>
      <DayPicker
        modifiersClassNames={{
          selected: 'my-selected',
          outside: 'my-today',
        }}
        mode='single'
        selected={selected}
        onSelect={setSelected}
        disabled={{ before: new Date() }}
      />
      <Text tag={'p'}>Available Slot</Text>
      <div className='grid grid-cols-2 gap-x-2 gap-y-4 md:grid-cols-4 md:gap-x-2 md:gap-y-4'>
        {availableTime.map((item, index) => {
          return (
            <Button
              className='mx-2'
              disabled={item.disabled}
              intent={
                item.disabled
                  ? 'disabled'
                  : scheduleSelected === index
                  ? 'primary'
                  : 'enabled'
              }
              key={item.id}
              onClick={() => scheduleSelectionHandler(index)}
            >
              {item.time}
            </Button>
          );
        })}
      </div>
    </div>
  );
};
