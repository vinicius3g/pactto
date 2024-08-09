'use client'

import Button from '@/components/Button/Button';
import WrapperLayout from '@/components/WrapperLayout/WrapperLayout';
import DefaultInput from '@/components/Input/DefaultInput/DefaultInput';
import TextArea from '@/components/Input/TextArea/TextArea';
import Link from 'next/link';
import { useState } from 'react';
import { CustomRadioButton } from '@/components/RadioButton/RadioButton';
import Switch from '@mui/material/Switch';

export const Packages = () => {
  const [selectedValue, setSelectedValue] = useState<string>('');

  const handleUpload = () => {
    console.log('Uploading')
  }

  const handleRadioChange = (value: string) => {
    setSelectedValue(value);
  };

  console.log(selectedValue)

  return (
    <WrapperLayout>
      <div className='mb-14 mt-5'>
        <div className='flex items-center mb-14 flex-col lg:flex-row justify-center lg:justify-between gap-5'>
          <Button color='primary' handleExec={handleUpload} text='add package' icon />

          <div className='flex gap-3 flex-col lg:flex-row'>
            <Button color='secondary' handleExec={handleUpload} text='save changes' />
            <Button handleExec={handleUpload} text='payment details' />
          </div>
        </div>

        <div className='flex items-center gap-8'>
          <div className='flex items-center'>
            <p className='text-2xl text-center text-gray-400'>Package is unpublished</p>
            <Switch defaultChecked color="default" />
          </div>
          <div>
            <p className='text-2xl text-center text-gray-400'>Delete package</p>
          </div>
        </div>
      </div>

      <div className='flex w-full gap-32 flex-col lg:flex-row bg-black-900 p-8 border border-teal border-solid lg:p-14'>
        <section className='w-full gap-8 flex flex-col'>
          <p className='text-2xl text-white font-semibold text-center'>1. Describe your package</p>

          <div className='space-bar' />

          <p className='text-2xl text-center text-gray-400'>
            Users will see this info on your expert page <br />
            or in your integrations,{' '} <Link href='/'>view example.</Link>
          </p>

          <DefaultInput label='Package name' placeholder='change the name of package' />
          <TextArea label='Package description' placeholder='Add description to this package' />
          <DefaultInput label='Package details (user will view only)' placeholder='Add details' />
          <DefaultInput label='Package instructions (customers will view too)' placeholder='Add instructions' />
        </section>

        <section className='w-full gap-8 flex flex-col'>
          <p className='text-2xl text-white font-semibold text-center'>2. Define requirements for your package</p>

          <div className='space-bar' />

          <p className='text-2xl text-center text-gray-400'>
            Users will be able to upload items for you to review. <br />
            The items can be files, links or combinations.
          </p>

          <p className='text-2xl text-white'>Review type</p>

          <CustomRadioButton
            label='Single file review (e.g. video, image, or PDF)'
            value='SingleFile'
            onChange={handleRadioChange}
            checked={selectedValue === 'SingleFile'}
            name="review-type"
          />

          <CustomRadioButton
            label='Single link review (e.g. LinkedIn URL, portfolio)'
            value='singlelink'
            onChange={handleRadioChange}
            checked={selectedValue === 'singlelink'}
            name="review-type"
          />

          <CustomRadioButton
            label='Single review of multiple files (e.g. 2 videos and 1 image, reviewed together)'
            value='singlereview'
            onChange={handleRadioChange}
            checked={selectedValue === 'singlereview'}
            name="review-type"
          />

          <p className='text-2xl text-white'>Review file type</p>

          <div className='flex flex-row gap-4'>
            <CustomRadioButton
              label='Video'
              value='video'
              onChange={handleRadioChange}
              checked={selectedValue === 'video'}
              name="review-file-type"
            />
            <CustomRadioButton
              label='Image'
              value='image'
              onChange={handleRadioChange}
              checked={selectedValue === 'image'}
              name="review-file-type"
            />
            <CustomRadioButton
              label='File (PDF, txt, etc)'
              value='file'
              onChange={handleRadioChange}
              checked={selectedValue === 'file'}
              name="review-file-type"
            />
          </div>

          <DefaultInput
            label='Options for the user to select (tags) view example'
            placeholder='Add option'
            subTitle='The user will be able to select these options when purchasing the package. They will become tags in your dashboard.'
          />
        </section>

        <section className='w-full gap-8 flex flex-col'>
          <p className='text-2xl text-white font-semibold text-center'>3. Define its cost and number of reviews</p>

          <div className='space-bar' />

          <p className='text-2xl text-center text-gray-400'>
            Users will upload their items for you to review, <br />
            and they pay your review fee.
          </p>

          <div className="flex items-center justify-between gap-4">
            <div className="w-full flex justify-between">
              <label htmlFor="package-tags" className="text-white">
                Package cost
              </label>
              <p className="text-pactto-gray">Price</p>
            </div>
            <div className="w-28">
              <input
                type="number"
                id="board-package-cost"
                placeholder="0"
                className="w-24 text-white"
                // onChange={handleChange}
              />
            </div>
          </div>
          <DefaultInput label='Package details (user will view only)' placeholder='Add details' />
          <p className='text-2xl text-center text-gray-400'>
            This package can result in one single review, <br />
            or it can be a specific number of reviews to <br />
            be consumed as credits.
          </p>

          <p className='text-2xl text-center text-gray-400'>
            Users can see and buy your package <br />
            when it’s published.
          </p>

          <div className='flex justify-center mt-7'>
            <Button handleExec={handleUpload} text='publish package' />
          </div>
        </section>


      </div>

    </WrapperLayout>
  );
};