import StyleHeading from '@/components/Header/StyleHeading';
import { Button } from '@/ui/Button';
import Image from 'next/image';
import {
  AiFillFacebook,
  AiFillInstagram,
  AiFillLinkedin,
  AiFillTwitterSquare,
} from 'react-icons/ai';
import Brand4 from '../../../public/Circle_logo.png';
import Brand1 from '../../../public/Empower_logo.png';
import Brand3 from '../../../public/Photography_logo.png';
import Brand2 from '../../../public/Textures_logo.png';
import AboutBg from '../../../public/aboutBg.png';
import Image1 from '../../../public/aboutImage1.png';
import Image2 from '../../../public/aboutImage2.png';
import Image3 from '../../../public/aboutImage3.png';
import Image5 from '../../../public/aboutImage5.png';
import Expert1 from '../../../public/expert1.png';
import Expert2 from '../../../public/expert2.png';
import Expert3 from '../../../public/expert3.png';

const Page = () => {
  return (
    <div>
      <Image src={AboutBg} alt='Empower Logo' style={{ width: '100%' }} />
      <div className='container mx-auto px-4'>
        {/* About Worktite Header */}
        <StyleHeading
          title='About Worktite'
          description='There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected'
        />
        <div className='grid grid-cols-1 gap-8 md:grid-cols-2'>
          {/* Two Image Conatiner */}
          <div>
            <div className='flex gap-6'>
              {/* Image1 */}
              <div className='relative mb-12 aspect-[3/5] w-full rounded-lg border-2 border-brand'>
                {/* Border div */}
                <div className='absolute inset-0 m-3'></div>
                {/* Image */}
                <div className='absolute left-2 top-2 h-full w-full'>
                  <Image
                    src={Image1}
                    alt='Expert1'
                    layout='fill'
                    objectFit='cover'
                    className='rounded-lg'
                  />
                </div>
              </div>
              {/* Image2 */}
              {/* <div className='mt-12 w-full'> */}
              <div className='relative mt-12 aspect-[3/5] w-full rounded-lg border-2 border-brand'>
                {/* Border div */}
                <div className='absolute inset-0 m-3'></div>
                {/* Image */}
                <div className='absolute bottom-2 right-2 h-full w-full'>
                  <Image
                    src={Image2}
                    alt='Expert2'
                    layout='fill'
                    objectFit='cover'
                    className='rounded-lg'
                  />
                </div>
              </div>
            </div>
          </div>
          {/* Product Description Conatiner */}
          <div className=''>
            <h4 className='text-2xl font-semibold'>
              It is a long established fact that a reader will be distracted
            </h4>
            <p className='mt-2'>
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsum is that it has a more-or-less normal
              distribution of letters, as opposed to using Content here, content
              here, making it look like readable English. Many desktop
              publishing packages and web page editors now use.
            </p>
            <div className='flex gap-8'>
              <div className='my-4'>
                <h3 className='text-3xl font-bold'>375+</h3>
                <p className='mt-4'>Completed Project</p>
              </div>
              <div className='my-4'>
                <h3 className='text-3xl font-bold'>127+</h3>
                <p className='mt-4'>Sketches</p>
              </div>
            </div>
            <Button>Read More</Button>
          </div>
        </div>
        {/* Mission of worktite Header */}
        <StyleHeading
          title='Mission of Worktite'
          description='There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected '
        />
        {/* Mission of worktite Image */}
        <div className='grid grid-cols-1 md:grid-cols-2'>
          <div className='col-span-1'>
            <Image
              src={Image3}
              style={{ width: '90%' }}
              alt='Mission of Worktite'
            />
          </div>
          <div className='relative col-span-1 aspect-square md:mt-36 md:aspect-[3/1]'>
            <div className='absolute bottom-20 right-0 z-10 h-full w-2/3 rounded-lg border-2 border-brand md:bottom-0 md:h-[120%] md:w-full'>
              <div className='relative'>
                <div className='absolute right-4 top-4 w-[120%] rounded-sm bg-white p-2 md:p-8'>
                  <h6 className='font-semibold md:text-xl'>
                    It is a long established fact that a reader will be
                    distracted
                  </h6>
                  <p className='mt-2 text-sm md:text-lg'>
                    {`It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as`}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Mission of worktite Text Box */}
      <div className='relative my-12 w-full'>
        {/* Simulated Background Image */}
        <div className='absolute inset-0 z-0'>
          {/* Image container to fill the parent */}
          <Image
            src={Image5}
            alt='Image description'
            layout='fill'
            objectFit='cover' // Ensures the image covers the area. Adjust as needed.
            quality={100}
          />
        </div>
        {/* Overlay Content */}
        <div className='relative z-10 p-4'>
          {/* Padding for content, adjust as needed */}
          <StyleHeading
            title='Our Brands'
            description='There are many variations of passages of Lorem Ipsum available'
            variant='dark'
          />
          {/* brand logos */}
          <div className='my-4 flex w-full justify-center gap-8'>
            <div className=''>
              <Image src={Brand1} alt='Brand1' />
            </div>
            <div className=''>
              <Image src={Brand2} alt='Brand2' />
            </div>
            <div className=''>
              <Image src={Brand3} alt='Brand2' />
            </div>
            <div className=''>
              <Image src={Brand4} alt='Brand2' />
            </div>
          </div>
        </div>
      </div>
      {/* Technical equipment Header */}
      <div className='container mx-auto px-4'>
        <div>
          <StyleHeading
            title='Technical equipment expert team'
            description='There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected'
          />
        </div>
        {/* Expert 1 */}
        <div className='grid grid-cols-1 gap-6 md:grid-cols-2'>
          <div className='col-span-1 my-4'>
            <div className='relative aspect-square w-full rounded-lg border-2 border-brand'>
              {/* Border div */}
              <div className='absolute inset-0 m-3'></div>
              {/* Image */}
              <div className='absolute left-2 top-2 h-full w-full'>
                <Image
                  src={Expert1}
                  alt='Expert1'
                  layout='fill'
                  objectFit='cover'
                  className='rounded-lg'
                />
              </div>
            </div>
          </div>
          <div className='col-span-1 flex items-center'>
            <div className=''>
              <h5 className='text-lg font-bold md:text-2xl'>
                Leslie Alexender
              </h5>
              <h6 className='my-2 font-light md:text-xl'>
                Head of the workrite furniture design
              </h6>
              <p className='text-sm text-gray-600 md:text-base'>
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
              </p>
              {/* social */}
              <div className='mt-5 flex gap-4 text-gray-600'>
                <AiFillFacebook className='text-2xl md:text-4xl' />
                <AiFillLinkedin className='text-2xl md:text-4xl' />
                <AiFillTwitterSquare className='text-2xl md:text-4xl' />
                <AiFillInstagram className='text-2xl md:text-4xl' />
              </div>
            </div>
          </div>
        </div>
        {/* Expert 2 */}
        <div className='mt-6 grid grid-cols-1 gap-6 md:grid-cols-2'>
          <div className='order-2 col-span-1 flex items-center md:order-1'>
            <div className=''>
              <h5 className='text-lg font-bold md:text-2xl'>
                Leslie Alexender
              </h5>
              <h6 className='my-2 font-light md:text-xl'>
                Head of the workrite furniture design
              </h6>
              <p className='text-sm text-gray-600 md:text-base'>
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
              </p>
              {/* social */}
              <div className='mt-5 flex gap-4 text-gray-600'>
                <AiFillFacebook className='text-2xl md:text-4xl' />
                <AiFillLinkedin className='text-2xl md:text-4xl' />
                <AiFillTwitterSquare className='text-2xl md:text-4xl' />
                <AiFillInstagram className='text-2xl md:text-4xl' />
              </div>
            </div>
          </div>
          <div className='order-1 col-span-1 my-4 md:order-2'>
            <div className='relative aspect-square w-full rounded-lg border-2 border-brand'>
              {/* Border div */}
              <div className='absolute inset-0 m-3'></div>
              {/* Image */}
              <div className='absolute bottom-2 right-2 h-full w-full'>
                <Image
                  src={Expert2}
                  alt='Expert2'
                  layout='fill'
                  objectFit='cover'
                  className='rounded-lg'
                />
              </div>
            </div>
          </div>
        </div>
        {/* Expert 3 */}
        <div className='mt-6 grid grid-cols-1 gap-6 md:grid-cols-2'>
          <div className='col-span-1 my-4'>
            <div className='relative aspect-square w-full rounded-lg border-2 border-brand'>
              {/* Border div */}
              <div className='absolute inset-0 m-3'></div>
              {/* Image */}
              <div className='absolute left-2 top-2 h-full w-full'>
                <Image
                  src={Expert3}
                  alt='Expert3'
                  layout='fill'
                  objectFit='cover'
                  className='rounded-lg'
                />
              </div>
            </div>
          </div>
          <div className='col-span-1 flex items-center'>
            <div className=''>
              <h5 className='text-lg font-bold md:text-2xl'>
                Leslie Alexender
              </h5>
              <h6 className='my-2 font-light md:text-xl'>
                Head of the workrite furniture design
              </h6>
              <p className='text-sm text-gray-600 md:text-base'>
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
              </p>
              {/* social */}
              <div className='mt-5 flex gap-4 text-gray-600'>
                <AiFillFacebook className='text-2xl md:text-4xl' />
                <AiFillLinkedin className='text-2xl md:text-4xl' />
                <AiFillTwitterSquare className='text-2xl md:text-4xl' />
                <AiFillInstagram className='text-2xl md:text-4xl' />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Subscribe to Newsletter */}
      <div className='mb-10 mt-10 grid grid-cols-3 bg-brand md:container md:mx-auto md:mb-12'>
        <div className='col-span-3 my-6 flex flex-col justify-center bg-brand text-center md:col-span-1'>
          <h6 className='text-base text-white'>Subscribe to our</h6>
          <h4 className='mt-2 text-xl uppercase text-white'>Newsletter</h4>
        </div>
        <div className='col-span-3 flex justify-center bg-brand_100 py-8 md:col-span-2 md:py-12'>
          <div className='flex justify-between rounded-md bg-secondary md:mx-4 md:w-full'>
            <input
              placeholder='jhanrock@gmail.com'
              className='m-4 w-full bg-secondary outline-none'
            />
            <Button size={'large'} className='m-1 md:px-12'>
              Subscribe
            </Button>
          </div>
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default Page;

{
  /* <div className='relative border-2 border-blue-800'>
            <div className='absolute bottom-20 right-0 border-2 border-brand p-8'>
              <div className='w-[120%] rounded-sm bg-white p-2'>
                <h6 className='font-semibold'>
                  It is a long established fact that a reader will be distracted
                </h6>
                <p className='mt-2 text-sm'>
                  {`It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as`}
                </p>
              </div>
            </div>
          </div> */
}
