'use client'

import Button from "@/components/Button/Button";
import Input from "@/components/Input/Input";
import Menu from "@/components/Menu/Menu";
import { useState } from "react";

export const VideoLibrary = () => {
  const [menuOpen, setMenuOpen] = useState(true);

  const handleCloseMenu = () => {
    setMenuOpen(!menuOpen);
  }

  const handleUpload = () => {
    console.log('Uploading')
  }

  const handleSeach = (e: React.FormEvent<HTMLInputElement>) => {
    console.log('Search', e.currentTarget.value)
  }

  return (
    <>
      <div className="p-12 pb-0">
        <Menu close={menuOpen} handleClose={handleCloseMenu} />
      </div>
      <main className={`main ${menuOpen ? 'shifted' : ''} p-12`}>
        <div className='mb-14 mt-28'>
          <div className='flex items-center justify-between mb-14'>
            <h1 className='text-5xl  text-white mb-9 font-bold'>Select a video</h1>

            <Button handleExec={handleUpload} icon text='upload new video' />
          </div>

          <h3 className="mb-6 text-2xl text-[#6e6e6e]">Videos uploaded to the reference video library can be used in side-by-side comparisons, or can be shared with learners directly.</h3>
          <div>
            <Input handleChange={handleSeach} />
          </div>
        </div>
      </main>
    </>
  );
}
