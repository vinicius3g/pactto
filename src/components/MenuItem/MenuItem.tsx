import Link from 'next/link';
import HouseIcon from '@mui/icons-material/House';
import QuestionAnswerIcon from '@mui/icons-material/QuestionAnswer';
import VideoLibraryIcon from '@mui/icons-material/VideoLibrary';
import InsertLinkIcon from '@mui/icons-material/InsertLink';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import RedeemIcon from '@mui/icons-material/Redeem';
import ViewCarouselIcon from '@mui/icons-material/ViewCarousel';
import OndemandVideoIcon from '@mui/icons-material/OndemandVideo';
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
import SettingsIcon from '@mui/icons-material/Settings';
import { usePathname } from 'next/navigation';

import styles from './MenuItem.module.css';

const MenuItem: React.FC = () => {
  const pathname = usePathname()

  const urlValidate = (url: string): string => pathname == url ? styles.active : ''
  const urlValidateChangeColorIcon = (url: string): string => pathname == url ? '#1dbba5' : '#b8b8b8'

  return (
    <nav>
      <ul>
        <li className={`${styles.item} ${urlValidate('/')}`}>
          <Link className={`${styles.item_wrapper} p-12 pb-0 pt-0`} href='/'>
            <HouseIcon sx={{ color: urlValidateChangeColorIcon('/'), fontSize: 24, marginRight: 1.5 }} />
            <p>Home</p>
          </Link>
        </li>
        <li className={`${styles.item} ${urlValidate('/pacttos')}`}>
          <Link className={`${styles.item_wrapper} p-12 pb-0 pt-0`} href='/pacttos'>
            <QuestionAnswerIcon sx={{ color: urlValidateChangeColorIcon('/pacttos'), fontSize: 24, marginRight: 1.5 }} />
            <p>Pacttos(Chats)</p>
          </Link>
        </li>
        <li className={`${styles.item} ${urlValidate('/itens-to-review')}`}>
          <Link className={`${styles.item_wrapper} p-12 pb-0 pt-0`} href='/itens-to-review'>
            <VideoLibraryIcon sx={{ color: urlValidateChangeColorIcon('/itens-to-review'), fontSize: 24, marginRight: 1.5 }} />
            <p>Items to review</p>
          </Link>
        </li>
        <li className={`${styles.item} ${urlValidate('/web-links')}`}>
          <Link className={`${styles.item_wrapper} p-12 pb-0 pt-0`} href='/web-links'>
            <InsertLinkIcon sx={{ color: urlValidateChangeColorIcon('/web-links'), fontSize: 24, marginRight: 1.5 }} />
            <p>Web links you created</p>
          </Link>
        </li>
        <li className={`${styles.item} ${urlValidate('/personal-information')}`}>
          <Link className={`${styles.item_wrapper} p-12 pb-0 pt-0`} href='/personal-information'>
            <ManageAccountsIcon sx={{ color: urlValidateChangeColorIcon('/personal-information'), fontSize: 24, marginRight: 1.5 }} />
            <p>Personal information</p>
          </Link>
        </li>
        <li className={`${styles.item} ${urlValidate('/')}`}>
          <Link className={`${styles.item_wrapper} p-12 pb-0 pt-0`} href='/'>
            <RedeemIcon sx={{ color: urlValidateChangeColorIcon(''), fontSize: 24, marginRight: 1.5 }} />
            <p>Review packages for sale</p>
          </Link>
        </li>
        <li className={`${styles.item} ${urlValidate('/pactto-website')}`}>
          <Link className={`${styles.item_wrapper} p-12 pb-0 pt-0`} href='/pactto-website'>
            <ViewCarouselIcon sx={{ color: urlValidateChangeColorIcon('/pactto-website'), fontSize: 24, marginRight: 1.5 }} />
            <p>Pactto website</p>
          </Link>
        </li>
        <li className={`${styles.item} ${urlValidate('/video-library')}`}>
          <Link className={`${styles.item_wrapper} p-12 pb-0 pt-0`} href='/video-library'>
            <OndemandVideoIcon sx={{ color: urlValidateChangeColorIcon('/video-library'), fontSize: 24, marginRight: 1.5 }} />
            <p>Reference video library</p>
          </Link>
        </li>
        <li className={`${styles.item} ${urlValidate('/subscription')}`}>
          <Link className={`${styles.item_wrapper} p-12 pb-0 pt-0`} href='/subscription'>
            <SubscriptionsIcon sx={{ color: urlValidateChangeColorIcon('/subscription'), fontSize: 24, marginRight: 1.5 }} />
            <p>Subscription</p>
          </Link>
        </li>
        <li className={`${styles.item} ${urlValidate('/settings')}`}>
          <Link className={`${styles.item_wrapper} p-12 pb-0 pt-0`} href='/settings'>
            <SettingsIcon sx={{ color: urlValidateChangeColorIcon('/settings'), fontSize: 24, marginRight: 1.5 }} />
            <p>Review Settings</p>
          </Link>
        </li>
      </ul>
    </nav>
  )
}

export default MenuItem;