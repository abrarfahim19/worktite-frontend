import { Button } from '@/ui/Button';

const NewsLetters = () => {
  return (
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
  );
};

export default NewsLetters;

// {/* Subscribe to Newsletter */}
// <div className='mb-10 mt-10 grid grid-cols-3 bg-brand md:container md:mx-auto md:mb-12'>
//   <div className='col-span-3 my-6 flex flex-col justify-center bg-brand text-center md:col-span-1'>
//     <h6 className='text-base text-white'>Subscribe to our</h6>
//     <h4 className='mt-2 text-xl uppercase text-white'>Newsletter</h4>
//   </div>
//   <div className='col-span-3 flex justify-center bg-brand_100 py-8 md:col-span-2 md:py-12'>
//     <div className='flex justify-between rounded-md bg-secondary md:mx-4 md:w-full'>
//       <input
//         placeholder='jhanrock@gmail.com'
//         className='m-4 w-full bg-secondary outline-none'
//       />
//       <Button size={'large'} className='m-1 md:px-12'>
//         Subscribe
//       </Button>
//     </div>
//   </div>
// </div>

// <div className='my-24 flex flex-col rounded-md bg-[#FFCD8D] md:flex-row'>
//   <div className='rounded-md'>
//     <Image
//         className='rounded-md h-full'
//         priority
//         width={581}
//         height={420}
//         src='https://s3-alpha-sig.figma.com/img/7b49/b732/bb3e260010eae85135faf525712a250d?Expires=1696809600&Signature=S~uidnVih0ut19HVxZnxklefS4GZdiJZt7rjB1DtGx8WdsSXZ4KHQZMipM1R2-jgJGuhgyDG9GRUOX52bFFSDHuahbrfyELwLy0sjDvDuH5WIq5bs~0sOOS-W9Lx31FqTZslrZib2-HKWJEGbKmL6jLRCQWXc8nc9qJKYhxW4Vu-Wm6~~TRgEadwYJKkj5hJYhZMWidW~SW4LwhOCqt6uyENqQktKw-tOWLeMPn~m5LwGrkaVRqQ9RSSzR9Mjzo~QrfkVTjWdW--Lav9243-bN62pCTsKGGX4UfkCEXC5aR37ENEGSyq3ptawaznxvohKPIPVUJ~~WDcbEFGw2SHRQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4'
//         alt='subscribe to our news letter'
//     />
//   </div>
//   <div className=' px-3 py-4 md:px-12 md:py-24'>
//     <Text decoration='h2' tag='h2'>
//       Subscribe Newsletters
//     </Text>
//     <Text decoration='p' tag='p' className='text-lg font-light'>
//       Contrary to popular belief, Lorem Ipsum is not simply random text.
//       It has roots in a piece of classical{' '}
//     </Text>
//     <form className='flex rounded border-2 border-white'>
//       <Input className='w-full border-none' placeholder='Mark Jhon' />
//       <Button intent='secondary' className='w-2/5 text-lg font-bold'>subscribe</Button>
//     </form>
//   </div>
// </div>
