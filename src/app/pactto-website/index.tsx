'use client'

import Button from '@/components/Button/Button';
import WrapperLayout from '@/components/WrapperLayout/WrapperLayout';
import DefaultInput from '@/components/Input/DefaultInput/DefaultInput';
import TextArea from '@/components/Input/TextArea/TextArea';
import Image from 'next/image';

export const PacttoWebsite = () => {
  const handleUpload = () => {
    console.log('Uploading')
  }

  return (
    <WrapperLayout>
      <div className='mb-14 mt-5'>
        <div className='flex items-center mb-14 flex-col lg:flex-row justify-center lg:justify-between'>
          <h1 className='text-4xl text-white mb-9'>Please edit your Pactto page below.</h1>

          <div className='flex gap-3 flex-col lg:flex-row'>
            <Button color='secondary' handleExec={handleUpload} text='launch' />
            <Button handleExec={handleUpload} text='save' />
          </div>
        </div>
      </div>

      <div className='flex w-full gap-32 flex-col lg:flex-row'>
        <section className='w-full gap-8 flex flex-col'>
          <DefaultInput label='Hero' placeholder='Public Name' />
          <DefaultInput placeholder='Headline' />
          <TextArea label='About Me' placeholder='About Me' />
          <DefaultInput placeholder='Expertise Title' />
          <DefaultInput placeholder='awards Title' />
          <DefaultInput placeholder='Add award' />
          <DefaultInput label='Give me a follow' placeholder='Add social  media channel' />
          <DefaultInput label='Youtube video' placeholder='Youtube video URL' />
          <TextArea label='Footer' placeholder='Quote' />
          <DefaultInput placeholder='Quote Author' />
        </section>

        <section className='w-full'>
          <div className='mb-10'>
            <p className='font-semibold text-white text-2xl mb-4'>Avatar</p>
            <div className='flex justify-center bg-[#0003] p-5'>
              <Image className='rounded-full' src='/avatar-placeholder.png' width={160} height={160} alt='' />
            </div>
          </div>

          <div>
            <p className='font-semibold text-white text-2xl mb-4'>Carousel</p>
            <Button handleExec={handleUpload} text='Add image' icon />
          </div>
        </section>
      </div>

    </WrapperLayout>
  );
};