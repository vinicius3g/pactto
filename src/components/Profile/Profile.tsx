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
          alt="Picture of the author"
          className='rounded-full'
          height={40}
          src="/avatar-placeholder.png"
          width={40}
        />

        <div className={`${styles.pro_flag} ml-4 mr-4 mb-4`} aria-label="trial flag">
          <span aria-label="trial text">TRIAL: 12 DAYS LEFT</span>
          <p aria-label="package">pactto pro</p>
        </div>

        <div className={`${styles.link} mt-4`} aria-label="go to upgrade">
          <Link href='/'>upgrade</Link>
        </div>
      </div>


      <div className={`${styles.user_info} mt-11`}>
        <p className='paragraph1'>Vinicius</p>
        <p className='subtext' aria-label="profile text member since">Pactto member since 2024</p>
      </div>
    </div>
  )
}

export default Profile;