import StyleHeading from '@/components/Header/StyleHeading';
import { Button } from '@/ui/Button';
import Image from 'next/image';
import AboutBg from '../../../public/aboutBg.png';
import Image1 from '../../../public/aboutImage1.png';
import Image2 from '../../../public/aboutImage2.png';

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
        {/* Two Image Conatiner */}
        <div className='flex gap-4'>
          {/* Image1 */}
          <div className=''>
            <Image
              src={Image1}
              alt='Special Product'
              style={{ width: '100%' }}
            />
          </div>
          {/* Image2 */}
          <div className='mt-12'>
            <Image
              src={Image2}
              alt='Special Product'
              style={{ width: '100%' }}
            />
          </div>
        </div>
        {/* Product Description Conatiner */}
        <div className='mt-4'>
          <h4 className='text-2xl font-light'>
            It is a long established fact that a reader will be distracted
          </h4>
          <p className='mt-2'>
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letters, as opposed to using Content here, content
            here, making it look like readable English. Many desktop publishing
            packages and web page editors now use.
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
        {/* Mission of worktite Header */}
        <StyleHeading
          title='Mission of Worktite'
          description='There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected '
        />
        {/* Mission of worktite Image */}
        {/* Mission of worktite Text Box */}
        {/* Our Barnds */}
        {/* Technical equipment Header */}
        {/* Expert 1 */}
        {/* Expert 2 */}
        {/* Expert 3 */}
        {/* Subscribe to Newsletter */}
        <div className=''></div>
      </div>
    </div>
  );
};

export default Page;
