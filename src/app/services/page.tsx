import StyleHeading from '@/components/Header/StyleHeading';
import Image from 'next/image';
import Banner from '../../../public/servicesBg.png';
import ContactIcon from '../../../public/servicesContactIcon.png';
import Image1 from '../../../public/servicesImage1.png';
import Image2 from '../../../public/servicesImage2.png';
import Image3 from '../../../public/servicesImage3.png';
import Image3Mobile from '../../../public/servicesImage3Mobile.png';
import Image4 from '../../../public/servicesImage4.png';
import Image5 from '../../../public/servicesImage5.png';

const Services = () => {
  return (
    <>
      <div className=''>
        {/* Banner Image */}
        <div>
          <Image src={Banner} alt='Services Banner' style={{ width: '100%' }} />
        </div>
        <div className='container mx-auto px-4'>
          <StyleHeading
            title='Design services for different clients'
            description='There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected '
          />
        </div>

        <div className='relative '>
          <div className='absolute inset-0 z-10 my-auto hidden h-[800px] w-full bg-brand md:block'></div>
          <div className='container relative z-40 mx-auto hidden px-4 md:block'>
            <div className='grid grid-cols-2 grid-rows-5  gap-10'>
              <div className='col-span-1 row-span-1 place-self-center'>
                <div>
                  <h4 className='text-2xl font-semibold'>
                    Design services for the DIY wood workers
                  </h4>
                  <p className='my-4 text-xl'>
                    {` It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, `}
                  </p>
                </div>
              </div>
              <div className='col-span-1 row-span-2'>
                <Image src={Image1} alt='Image1' style={{ width: '100%' }} />
              </div>
              <div className='col-span-1 row-span-2'>
                <Image src={Image2} alt='Image1' style={{ width: '100%' }} />
              </div>
              <div className='col-span-1 row-span-1 place-self-center'>
                <div>
                  <h4 className='text-2xl font-semibold text-white'>
                    Design services for the DIY wood workers
                  </h4>
                  <p className='my-4 text-xl text-white'>
                    {` It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, `}
                  </p>
                </div>
              </div>
              <div className='col-span-1 row-span-2 place-self-center'>
                <div>
                  <h4 className='text-2xl font-semibold'>
                    Design services for the DIY wood workers
                  </h4>
                  <p className='my-4 text-xl'>
                    {` It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, `}
                  </p>
                </div>
              </div>
              <div className='col-span-1 row-span-2'>
                <Image src={Image3} alt='Image3' style={{ width: '100%' }} />
              </div>
            </div>
          </div>
        </div>

        <div className='md:hidden'>
          <div className='container mx-auto px-4'>
            {/* style Heading */}
            {/* 1st text section */}
            <div>
              <h4 className='font-bold'>
                Design services for the DIY wood workers
              </h4>
              <p className='my-4'>
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
                The point of using Lorem Ipsum is that it has a more-or-less
                normal distribution of letters, as opposed to using
              </p>
            </div>
            {/* mobile - two Image section */}
            <div className='relative grid grid-cols-2'>
              <div className='z-20 mt-16'>
                <Image
                  src={Image2}
                  alt='Services Banner'
                  style={{ width: '100%' }}
                />
              </div>
              <div className='z-20'>
                <Image
                  src={Image1}
                  alt='Services Banner'
                  style={{ width: '100%' }}
                />
              </div>
            </div>
          </div>
          <div className='relative bg-brand'>
            <div className='absolute top-[-64px] z-10 h-16 w-full bg-brand '></div>
            <div className='absolute bottom-[-64px] z-10 h-16 w-full bg-brand '></div>
            <div className='container mx-auto w-full px-4 py-6'>
              <h4 className='font-semibold text-white'>
                Design services for the DIY wood workers
              </h4>
              <p className='my-4 font-light text-white'>
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
                The point of using Lorem Ipsum is that it has a more-or-less
                normal distribution of letters, as opposed to using
              </p>
            </div>
          </div>
          <div className='relative z-40 mx-auto w-[80%]'>
            <div className='z-40 '>
              <Image
                src={Image3Mobile}
                alt='Wood Image'
                style={{ width: '100%' }}
              />
            </div>
          </div>
          <div className='container mx-auto mt-4 px-4'>
            <h4 className='font-semibold'>
              Design services for the DIY wood workers
            </h4>
            <p className='my-4 font-light '>
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsum is that it has a more-or-less normal
              distribution of letters, as opposed to using
            </p>
          </div>
        </div>

        <div className='container mx-auto px-4'>
          <StyleHeading
            title='Design process'
            description='There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected'
          />
        </div>

        <div className='container mx-auto hidden grid-cols-2 gap-8 px-4 md:grid'>
          {/* items */}
          <div className='col-span-1'>
            <IconCards />
            <IconCards active />
            <IconCards />
            <IconCards />
            <IconCards />
          </div>
          {/* Description */}
          <div className='col-span-1'>
            <div className=''>
              <Image
                src={Image4}
                style={{ width: '100%' }}
                alt='Design Process Image'
              />
            </div>
            <div className='container mx-auto mt-4 px-4'>
              <h4 className='font-semibold'>
                Design services for the DIY wood workers
              </h4>
              <p className='my-4 font-light '>
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
                The point of using Lorem Ipsum is that it has a more-or-less
                normal distribution of letters, as opposed to using
              </p>
            </div>
          </div>
        </div>

        {/* Mobile */}
        <div className='md:hidden'>
          <div className='container mx-auto px-4'>
            <Image
              src={Image4}
              style={{ width: '100%' }}
              alt='Design Process Image'
            />
          </div>
          <div className='container mx-auto mt-4 px-4'>
            <h4 className='font-semibold'>
              Design services for the DIY wood workers
            </h4>
            <p className='my-4 font-light '>
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsum is that it has a more-or-less normal
              distribution of letters, as opposed to using
            </p>
          </div>
          <div className='container mx-auto px-6'>
            <IconCards />
            <IconCards active />
            <IconCards />
            <IconCards />
            <IconCards />
          </div>
        </div>
        <div className='container mx-auto px-4'>
          <StyleHeading
            title='List of machines used for designing'
            description='There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected '
          />
        </div>

        <div className='container mx-auto grid grid-cols-1 gap-4 px-4 md:grid-cols-2'>
          <div className='col-span-1'>
            <h4 className='font-semibold'>Minimum required for any project </h4>
            <p className='my-4 font-light '>
              {`It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).  `}
            </p>
          </div>
          <div className='col-span-1'>
            <Image src={Image5} alt='Tools Image' style={{ width: '100%' }} />
          </div>
        </div>
        <div className='my-4 flex justify-center'>
          <button className=''>Load More...</button>
        </div>
      </div>
    </>
  );
};

export default Services;

interface IconCardsInterface {
  active?: boolean;
}

const IconCards: React.FC<IconCardsInterface> = ({ active }) => {
  return (
    <div
      className={`flex items-center justify-between border-r-2 ${active ? 'border-brand' : 'border-gray-200'} border-brand py-4 pr-4`}
    >
      <h4
        className={`text-xl ${active ? 'text-semibold text-brand' : 'text-gray-700'}  md:text-2xl`}
      >
        Item
      </h4>
      <div
        className={`flex h-20 w-20 items-center justify-center rounded-full border-2 border-gray-200 ${active ? 'bg-gray-100' : 'bg-none'}`}
      >
        <Image src={ContactIcon} alt='Contact Icon' style={{ width: '50%' }} />
      </div>
    </div>
  );
};
