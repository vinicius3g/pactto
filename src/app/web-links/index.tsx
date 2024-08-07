'use client'

import { useState } from "react";
import Input from "@/components/Input/Input";
import Menu from "@/components/Menu/Menu";

export const WebLinks = () => {
  const [menuOpen, setMenuOpen] = useState(true);

  const handleCloseMenu = () => {
    setMenuOpen(!menuOpen);
  }

  const handleSeach = (e: React.FormEvent<HTMLInputElement>) => {
    console.log('Search', e.currentTarget.value)
  }

  return (
    <>
      <div className="p-12 pb-0">
        <Menu handleClose={handleCloseMenu} close={menuOpen} />
      </div>
      <main className={`main ${menuOpen ? 'shifted' : ''} p-12`}>
        <div className='mb-14 mt-28'>
          <div className='flex items-center justify-between mb-14'>
            <h1 className='text-5xl  text-white mb-9 font-bold'>There are no public web links you created</h1>
          </div>

          <div>
            <Input handleChange={handleSeach} />
          </div>
        </div>

        <div className='mb-14 mt-28'>
          <div className='flex items-center justify-between mb-14'>
            <h1 className='text-5xl  text-white mb-9 font-bold'>There are no private web links you created</h1>
          </div>

          <div>
            <Input handleChange={handleSeach} />
          </div>
        </div>
      </main>
    </>
  );
}
