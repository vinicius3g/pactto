'use client'

import Button from '@/components/Button/Button';
import { Slider } from '@/components/Slider/Slider';
import { ColorSelector } from '@/components/ColorSelector/ColorSelector';
import { CheckBoxList } from '@/components/CheckBoxList/CheckBoxList';
import WrapperLayout from '@/components/WrapperLayout/WrapperLayout';
import Select from '@/components/Select/Select';

export const Settings = () => {


  const handleUpload = () => {
    console.log('Uploading')
  }

  const handleSelection = () => {
    console.log('Selection')
  }

  return (
    <WrapperLayout>
      <div className='mb-14 mt-5'>
        <div className='flex items-center justify-between mb-14 flex-col lg:flex-row'>
          <h1 className='text-4xl text-white mb-9'>Review Settings</h1>

          <div className='flex gap-3 flex-col lg:flex-row'>
            <Button color='secondary' handleExec={handleUpload} text='reset changes' />
            <Button handleExec={handleUpload} text='save changes' />
          </div>
        </div>
      </div>

      <CheckBoxList
        items={[
          "Show logo",
          "Start with microphone enabled",
          "Start with camera enabled",
          "Videos loaded start muted",
          "Notes disappear after 1 second",
          "Trackpad: pinch to zoom",
          "Trackpad: reposition with 2-finger swipe",
        ]}
      />

      <section className='mt-9 mb-9'>
        <Slider label="Brush size for tools" />
      </section>

      <section className="flex flex-col gap-4 mt-9 mb-9">
        <p className="text-white text-2xl">Note color options</p>
        <div className="flex gap-4 flex-col lg:flex-row">
          <ColorSelector initialColor="#008000" label="Color 1" />
          <ColorSelector initialColor="#FF0000" label="Color 2" />
          <ColorSelector initialColor="#FFFFFF" label="Color 3" />
          <ColorSelector initialColor="#000000" label="Color 4" />
        </div>
      </section>

      <section>
        <div className="flex gap-4 w-fit flex-col lg:flex-row">
          <Select
            key={0}
            label="Camera"
            onChange={handleSelection}
            options={["Default", "Option 2", "Option 3"]}
            value="Default"
          />
          <Select
            key={1}
            label="Microphone"
            onChange={handleSelection}
            options={["Default", "Option 2", "Option 3"]}
            value="Default"
          />
          <Select
            key={2}
            label="Speakers"
            onChange={handleSelection}
            options={["Default", "Option 2", "Option 3"]}
            value="Default"
          />
        </div>
      </section>
    </WrapperLayout>
  );
};