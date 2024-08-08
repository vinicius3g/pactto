'use client'

import { useState } from 'react';
import Menu from '@/components/Menu/Menu';
import Link from 'next/link';
import Button from '@/components/Button/Button';
import CheckIcon from '@mui/icons-material/Check';

export const Subscription = () => {
  const [menuOpen, setMenuOpen] = useState(true);

  const handleCloseMenu = () => {
    setMenuOpen(!menuOpen);
  }

  const handleUpload = () => {
    console.log('Uploading')
  }

  return (
    <>
      <div className="p-12 pb-0">
        <Menu close={menuOpen} handleClose={handleCloseMenu} />
      </div>
      <main className={`main ${menuOpen ? 'shifted' : ''} p-12`}>
        <div>
          <p className='font-semibold text-2xl text-white mb-14'>You have access to {' '}
            <span className='uppercase'>pactto pro</span> {' '}
            as a trial. 10 days left
          </p>

          <Button handleExec={handleUpload} text='subscribe to pactto pro' />

          <p className='font-semibold text-2xl text-white mt-14 mb-14'>The PACTTO PRO subscription allows you to:</p>
        </div>

        <div className='flex mb-2'>
          <CheckIcon sx={{ color: '#1dbba5', fontSize: 14, marginRight: 1.5 }} />
          <p className='todo'>Every feature on the FREE plan</p>
        </div>

        <div className='flex mb-2'>
          <CheckIcon sx={{ color: '#1dbba5', fontSize: 14, marginRight: 1.5 }} />
          <p className='todo'>Full access to the Pactto app on iPhones, iPads, Android, Mac, Windows, and Web</p>
        </div>

        <div className='flex mb-2'>
          <CheckIcon sx={{ color: '#1dbba5', fontSize: 14, marginRight: 1.5 }} />
          <p className='todo'>Max screen recording duration on Pactto Desktop: <b>unlimited</b>
          </p>
        </div>

        <div className='flex mb-2'>
          <CheckIcon sx={{ color: '#1dbba5', fontSize: 14, marginRight: 1.5 }} />
          <p className='todo'>Max review duration on mobile: <b>unlimited</b></p>
        </div>

        <div className='flex mb-2'>
          <CheckIcon sx={{ color: '#1dbba5', fontSize: 14, marginRight: 1.5 }} />
          <p className='todo'>Max review duration on Pactto Web: 12 minutes</p>
        </div>

        <div className='flex mb-2'>
          <CheckIcon sx={{ color: '#1dbba5', fontSize: 14, marginRight: 1.5 }} />
          <p className='todo'>Max review duration on Pactto Desktop: 20 minutes</p>
        </div>

        <div className='flex mb-2'>
          <CheckIcon sx={{ color: '#1dbba5', fontSize: 14, marginRight: 1.5 }} />
          <p className='todo'>Manage and use your reference video library on the Web and Desktop</p>
        </div>

        <div className='flex mb-2'>
          <CheckIcon sx={{ color: '#1dbba5', fontSize: 14, marginRight: 1.5 }} />
          <p className='todo'>Review videos uploaded by you, using the browser</p>
        </div>

        <div className='flex mb-2'>
          <CheckIcon sx={{ color: '#1dbba5', fontSize: 14, marginRight: 1.5 }} />
          <p className='todo'>Add your own logo to create branded reviews</p>
        </div>

        <div className='flex mb-2'>
          <CheckIcon sx={{ color: '#1dbba5', fontSize: 14, marginRight: 1.5 }} />
          <p className='todo'>If you sell reviews, the Pactto take rate for paid reviews is 3%, instead of 12% for free users</p>
        </div>

        <div className='flex mb-2'>
          <CheckIcon sx={{ color: '#1dbba5', fontSize: 14, marginRight: 1.5 }} />
          <p className='todo'><Link href='/'>Integrate Pactto to your website</Link> {' '} so anyone can send, and pay, for your video feedback</p>
        </div>

        <div className='flex mb-2'>
          <CheckIcon sx={{ color: '#1dbba5', fontSize: 14, marginRight: 1.5 }} />
          <p className='todo'>Share your videos with others (no more sending video files around)</p>
        </div>
      </main>
    </>
  );
};