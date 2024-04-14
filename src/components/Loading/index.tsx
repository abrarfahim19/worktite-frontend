export default function Loading() {
  return (
    <div className='flex items-center justify-center'>
      <div className='flex flex-row gap-2'>
        <div className='h-4 w-4 animate-bounce rounded-full bg-blue-700 [animation-delay:.7s]'></div>
        <div className='h-4 w-4 animate-bounce rounded-full bg-blue-700 [animation-delay:.3s]'></div>
        <div className='h-4 w-4 animate-bounce rounded-full bg-blue-700 [animation-delay:.7s]'></div>
      </div>
    </div>
  );
}
