import StyleHeading from '@/components/Header/StyleHeading';
import { ProductDetailsCarousel } from '@/components/ProductDetailsCarousel';
import { SimilarProductCarousel } from '@/components/SimilarProductCarousel';
import LoaderComponent from '@/components/common/LoaderComponent';
import { Button } from '@/ui/Button';
import Image from 'next/image';
import { IoMdShare } from 'react-icons/io';
import GalleryBg from '../../../../public/galleryBg.png';

interface ListInterface {
  title: string;
  value: string;
}

const Page = ({ params }: { params: { slug: string } }) => {
  return (
    <div>
      <Image src={GalleryBg} alt='Empower Logo' style={{ width: '100%' }} />
      <div className='container mx-auto px-4'>
        <StyleHeading
          title='Project Details Page'
          description='Shop your choice from our designated Shop'
        />
        <div className='grid grid-cols-1 gap-3 md:grid-cols-2'>
          {/* Image Slider */}
          <div className='col-span-1 my-2'>
            <ProductDetailsCarousel />
          </div>
          {/* Description */}
          <div className='col-span-1'>
            {/* heading */}
            <div className='flex items-center justify-between gap-3 md:flex-col md:items-start md:justify-start'>
              <h1 className='text-xl font-bold'>Multi Funciton Table</h1>
              <Button
                intent={'outlined'}
                className='flex items-center justify-center'
              >
                <IoMdShare className='mr-3 font-bold' />
                <p className='font-medium'>Share</p>
              </Button>
            </div>
            {/* description list */}
            <div className='my-4 flex flex-col gap-4'>
              <ListItem title='Duration of the project' value='03 days' />
              <ListItem title='Duration of the project' value='03 days' />
              <ListItem title='Duration of the project' value='03 days' />
              <ListItem title='Duration of the project' value='03 days' />
              <ListItem title='Duration of the project' value='03 days' />
              <ListItem title='Duration of the project' value='03 days' />
              <ListItem title='Duration of the project' value='03 days' />
            </div>
            {/* description button */}
            <div className='flex flex-col gap-4 md:flex-row'>
              <Button title='Find more' className='w-full' intent={'outlined'}>
                <p>Find More</p>
              </Button>
              <Button
                title='Make an Appointment'
                className='w-full'
                intent={'primary'}
              >
                <p>Make an Appointment</p>
              </Button>
            </div>
          </div>
        </div>
        {/* Story of the product */}
        <div className='relative mt-3 inline-block'>
          <div className='absolute inset-x-0 bottom-0 h-[2px] w-12 bg-brand'></div>
          <h3 className='text-xl text-brand'>The Story</h3>
        </div>
        <div>
          <LoaderComponent
            className='mt-4'
            preText='Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis
            perferendis eveniet voluptas officia a ut assumenda, vitae sequi
            similique suscipit consectetur accusamus incidunt ullam in!
            Assumenda doloribus odit vel mollitia!'
            postText=' 
             Lorem ipsum dolor sit amet
            consectetur, adipisicing elit. Tempora minima harum nulla amet,
            delectus esse quibusdam architecto nisi deleniti consequuntur dolore
            iste incidunt rerum, sapiente et quaerat inventore ea quo, iure hic
            adipisci sequi ipsum facilis obcaecati. Maxime vitae impedit
            officiis eius distinctio. Odio debitis ratione aliquam, est natus
            aperiam consectetur? Sit reiciendis quibusdam officia suscipit
            magnam rem provident nisi!'
          />
          <p className='mt-3 text-black'></p>
        </div>
        {/* More inspiration */}
        <StyleHeading
          title='More inspiration form gallery'
          description='Shop from your choice Shop from your choice Shop from your choice'
        />
        <SimilarProductCarousel />
        <div className='container mx-auto'>{params.slug}</div>
      </div>
    </div>
  );
};

export default Page;

const ListItem: React.FC<ListInterface> = ({ title, value }) => {
  return (
    <div className='flex justify-between'>
      <p>{title}</p>
      <div className='w-40'>
        <p className='font-bold'>{value}</p>
      </div>
    </div>
  );
};
