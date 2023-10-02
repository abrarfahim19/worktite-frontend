import React from 'react';
import Image from "next/image";
import {Text} from "@/ui/Text";
import {Input} from "@/ui/Input";
import {Button} from "@/ui/Button";

const NewsLetters = () => {
  return <div className='my-24 flex flex-col rounded-md bg-[#FFCD8D] md:flex-row'>
    <div className='rounded-md'>
      <Image
          className='rounded-md h-full'
          priority
          width={581}
          height={420}
          src='https://s3-alpha-sig.figma.com/img/7b49/b732/bb3e260010eae85135faf525712a250d?Expires=1696809600&Signature=S~uidnVih0ut19HVxZnxklefS4GZdiJZt7rjB1DtGx8WdsSXZ4KHQZMipM1R2-jgJGuhgyDG9GRUOX52bFFSDHuahbrfyELwLy0sjDvDuH5WIq5bs~0sOOS-W9Lx31FqTZslrZib2-HKWJEGbKmL6jLRCQWXc8nc9qJKYhxW4Vu-Wm6~~TRgEadwYJKkj5hJYhZMWidW~SW4LwhOCqt6uyENqQktKw-tOWLeMPn~m5LwGrkaVRqQ9RSSzR9Mjzo~QrfkVTjWdW--Lav9243-bN62pCTsKGGX4UfkCEXC5aR37ENEGSyq3ptawaznxvohKPIPVUJ~~WDcbEFGw2SHRQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4'
          alt='subscribe to our news letter'
      />
    </div>
    <div className=' px-3 py-4 md:px-12 md:py-24'>
      <Text decoration='h2' tag='h2'>
        Subscribe Newsletters
      </Text>
      <Text decoration='p' tag='p' className='text-lg font-light'>
        Contrary to popular belief, Lorem Ipsum is not simply random text.
        It has roots in a piece of classical{' '}
      </Text>
      <form className='flex rounded border-2 border-white'>
        <Input className='w-full border-none' placeholder='Mark Jhon' />
        <Button intent='secondary' className='w-2/5 text-lg font-bold'>subscribe</Button>
      </form>
    </div>
  </div>;
};

export default NewsLetters;
