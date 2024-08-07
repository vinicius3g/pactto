'use client'

import Image from 'next/image'
import styles from './Menu.module.css';
import Profile from '../Profile/Profile';
import MenuItem from '../MenuItem/MenuItem';

interface IMenuProps {
  handleClose: () => void
  close: boolean
}

const Menu: React.FC<IMenuProps> = ({ handleClose, close }) => {

  if (!close) {
    return <button className={styles.open_button} onClick={handleClose}><i></i></button>;
  }

  return (
    <div className={`${styles.menu_container} ${!close ? styles.closed : ''} relative`}>
      <button className={`${styles.close_button} absolute`} onClick={handleClose}>
        <i></i>
      </button>

      <div className='p-12 pb-0'>
        <Image
          alt="Logo"
          height={45}
          src="/pactto-logo.svg"
          width={140}
        />
        <p className={`${styles.subtitle} mt-5 font-bold`}>YOUR PACTTO PROFILE</p>
      </div>

      <Profile attributes='mt-10 mb-10  p-12 pb-0' />

      <MenuItem />

      <div className='p-12'>
        <button className={styles.logout}>
          <span className='font-bold uppercase'>logout</span>
        </button>
      </div>
    </div>
  )
}

export default Menu;