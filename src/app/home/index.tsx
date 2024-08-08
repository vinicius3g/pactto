'use client'

import { useState } from 'react';
import Menu from '@/components/Menu/Menu';
import Link from 'next/link';
import Button from '@/components/Button/Button';
import Input from '@/components/Input/Input';

export const Home = () => {
  const [menuOpen, setMenuOpen] = useState(true);

  function handleCloseMenu(): void {
    setMenuOpen(!menuOpen);
  }

  const handleUpload = () => {
    console.log('Uploading')
  }

  const handleSeach = (event: React.FormEvent<HTMLInputElement>) => {
    console.log('Search', event.currentTarget.value)
  }

  return (
    <>
      <div className="p-12 pb-0">
        <Menu close={menuOpen} handleClose={handleCloseMenu} />
      </div>
      <main className={`main ${menuOpen ? 'shifted' : ''} p-12`}>
        <div>
          <h3 className='font-medium text-4xl text-white mb-9'>Hey Vinicius, welcome to Pactto!</h3>
        </div>

        <div className='flex mb-2'>
          <p className='todo_flag'>done</p>
          <p className='todo'>Open your inbox and verify your email</p>
        </div>

        <div className='flex mb-2'>
          <p className='todo_flag'>todo</p>
          <p className='todo'>Check the {' '}
            <Link href='/'>short video of Pactto in action</Link>
          </p>
        </div>

        <div className='flex mb-2'>
          <p className='todo_flag'>todo</p>
          <p className='todo'>Wanna record your computer screen or review files? Download Pactto for {' '}
            <Link href='/' >Mac</Link>{' '}
            or {' '}
            <Link href='/' >Windows</Link>
          </p>
        </div>

        <div className='flex mb-2'>
          <p className='todo_flag'>todo</p>
          <p className='todo'>Wanna review videos, images or audio files with your phone or tablet? Download Pactto for {' '}
            <Link href='/'>iOS</Link> or {' '} <Link href='/'>Android</Link>
          </p>
        </div>

        <div className='mb-14 mt-28'>
          <div className='flex items-center justify-between mb-14'>
            <h1 className='text-5xl  text-white mb-9 font-bold'>My uploads</h1>

            <Button handleExec={handleUpload} icon text='upload new video' />
          </div>

          <div>
            <Input handleChange={handleSeach} />
          </div>
        </div>
      </main>
    </>
  );
};