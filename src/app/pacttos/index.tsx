'use client'

import Input from "@/components/Input/Input";
import Menu from "@/components/Menu/Menu";
import { useState } from "react";

export const Pacttos = () => {
  const [menuOpen, setMenuOpen] = useState(true);

  const handleCloseMenu = () => {
    setMenuOpen(!menuOpen);
  }

  const handleSeach = (e: React.FormEvent<HTMLInputElement>) => {
    console.log('Search', e.currentTarget.value)
  }

  return (
    <>
      <Menu handleClose={handleCloseMenu} close={menuOpen} />
      <main className={`main ${menuOpen ? 'shifted' : ''}`}>
        <div className='mb-14 mt-28'>
          <div className='flex items-center justify-between mb-14'>
            <h1 className='text-5xl  text-white mb-9 font-bold'>Pacttos (Chats)</h1>
          </div>

          <div>
            <Input handleChange={handleSeach} />
          </div>
        </div>
      </main>
    </>
  );
}
