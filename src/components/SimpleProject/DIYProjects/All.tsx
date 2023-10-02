import Image from 'next/image';
import image1 from '../../../../public/image1.png';
import image2 from '../../../../public/image2.png';
import image3 from '../../../../public/image3.png';

function All() {
  // const randomInt = (min: number, max:number) => Math.floor(Math.random() * (max - min + 1)) + min;
  return (
    <div className='mx-auto'>
      <div className=' grid w-full grid-cols-1 gap-4 md:grid-cols-2'>
        <div className=' block max-h-[318px] md:col-span-1 md:row-span-2'>
          <Image
            src={image1}
            className='h-full object-cover'
            alt='Image1'
            width={800}
            height={800}
          />
        </div>
        <div className='hidden max-h-[150px] md:col-span-1 md:row-span-1 md:block'>
          <Image
            src={image3}
            className='h-full object-cover'
            alt='Image2'
            width={800}
            height={800}
          />
        </div>
        <div className='hidden max-h-[150px] md:col-span-1 md:row-span-1 md:block'>
          <Image
            src={image2}
            className='h-full object-cover'
            alt='Image3'
            width={800}
            height={800}
          />
        </div>
        <div className='hidden max-h-[300px] md:col-span-2 md:row-span-2 md:block'>
          <Image
            src={image3}
            className='h-full w-full object-cover'
            alt='Image4'
            width={800}
            height={800}
          />
        </div>
      </div>
    </div>
    // <div className='container mx-auto bg-white'>
    //   <div className='grid grid-cols-1 gap-4 md:grid-cols-4 md:grid-rows-2'>
    //     <div className='bg-green-200 md:col-span-1 md:row-span-2'>
    //       <Image
    //         className='h-full object-cover'
    //         alt='Image1'
    //         src={image1}
    //         width={900}
    //         height={900}
    //       />
    //     </div>
    //     <div className='hidden bg-blue-200 md:col-span-2 md:row-span-2 md:block'>
    //       <Image
    //         className='h-full object-cover'
    //         alt='Image3'
    //         src={image3}
    //         width={900}
    //         height={900}
    //       />
    //     </div>
    //     <div className='hidden bg-orange-200 md:col-span-1 md:row-span-1 md:block'>
    //       <Image
    //         className='h-full object-cover'
    //         alt='Image2'
    //         src={image2}
    //         width={900}
    //         height={900}
    //       />
    //     </div>
    //     <div className='hidden bg-purple-200 md:col-span-1 md:row-span-1 md:block'>
    //       <Image
    //         className='h-full object-cover'
    //         alt='Image1'
    //         src={image3}
    //         width={900}
    //         height={900}
    //       />
    //     </div>
    //   </div>
    // </div>
    // </>
  );
}

export default All;

const ProjectImageContainer = ({ className }: { className: string }) => {
  return <div className={className}>hello</div>;
};
