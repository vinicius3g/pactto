import Image from 'next/image'

import styles from './Profile.module.css'
import Link from 'next/link';

interface IProfile {
  attributes: string
}

const Profile: React.FC<IProfile> = ({ attributes }) => {
  return (
    <div className={`${styles.profile_container} ${attributes}`} >
      <div className='flex w-full items-center'>
        <Image
          className='rounded-full'
          alt="Picture of the author"
          height={40}
          src="/avatar-placeholder.png"
          width={40}
        />

        <div className={`${styles.pro_flag} ml-4 mr-4 mb-4`}>
          <span>TRIAL: 12 DAYS LEFT</span>
          <p>pactto pro</p>
        </div>

        <div className={`${styles.link} mt-4`}>
          <Link href='/'>upgrade</Link>
        </div>
      </div>


      <div className={`${styles.user_info} mt-11`}>
        <p className='paragraph1'>Vinicius</p>
        <p className='subtext'>Pactto member since 2024</p>
      </div>
    </div>
  )
}

export default Profile;