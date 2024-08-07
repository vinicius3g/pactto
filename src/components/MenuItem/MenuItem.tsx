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

import styles from './MenuItem.module.css';

const MenuItem: React.FC = () => {

  return (
    <nav>
      <ul>
        <li className={styles.item}>
          <Link href='/' className={`${styles.item_wrapper} p-12 pb-0 pt-0`}>
            <HouseIcon sx={{ color: '#b8b8b8', fontSize: 24, marginRight: 1.5 }} />
            <p>Home</p>
          </Link>
        </li>
        <li className={styles.item}>
          <Link href='/pacttos' className={`${styles.item_wrapper} p-12 pb-0 pt-0`}>
            <QuestionAnswerIcon sx={{ color: '#b8b8b8', fontSize: 24, marginRight: 1.5 }} />
            <p>Pacttos(Chats)</p>
          </Link>
        </li>
        <li className={styles.item}>
          <Link href='/itens-to-review' className={`${styles.item_wrapper} p-12 pb-0 pt-0`}>
            <VideoLibraryIcon sx={{ color: '#b8b8b8', fontSize: 24, marginRight: 1.5 }} />
            <p>Items to review</p>
          </Link>
        </li>
        <li className={styles.item}>
          <Link href='/' className={`${styles.item_wrapper} p-12 pb-0 pt-0`}>
            <InsertLinkIcon sx={{ color: '#b8b8b8', fontSize: 24, marginRight: 1.5 }} />
            <p>Web links you created</p>
          </Link>
        </li>
        <li className={styles.item}>
          <Link href='/' className={`${styles.item_wrapper} p-12 pb-0 pt-0`}>
            <ManageAccountsIcon sx={{ color: '#b8b8b8', fontSize: 24, marginRight: 1.5 }} />
            <p>Personal information</p>
          </Link>
        </li>
        <li className={styles.item}>
          <Link href='/' className={`${styles.item_wrapper} p-12 pb-0 pt-0`}>
            <RedeemIcon sx={{ color: '#b8b8b8', fontSize: 24, marginRight: 1.5 }} />
            <p>Review packages for sale</p>
          </Link>
        </li>
        <li className={styles.item}>
          <Link href='/' className={`${styles.item_wrapper} p-12 pb-0 pt-0`}>
            <ViewCarouselIcon sx={{ color: '#b8b8b8', fontSize: 24, marginRight: 1.5 }} />
            <p>Pactto website</p>
          </Link>
        </li>
        <li className={styles.item}>
          <Link href='/' className={`${styles.item_wrapper} p-12 pb-0 pt-0`}>
            <OndemandVideoIcon sx={{ color: '#b8b8b8', fontSize: 24, marginRight: 1.5 }} />
            <p>Reference video library</p>
          </Link>
        </li>
        <li className={styles.item}>
          <Link href='/' className={`${styles.item_wrapper} p-12 pb-0 pt-0`}>
            <SubscriptionsIcon sx={{ color: '#b8b8b8', fontSize: 24, marginRight: 1.5 }} />
            <p>Subscription</p>
          </Link>
        </li>
        <li className={styles.item}>
          <Link href='/' className={`${styles.item_wrapper} p-12 pb-0 pt-0`}>
            <SettingsIcon sx={{ color: '#b8b8b8', fontSize: 24, marginRight: 1.5 }} />
            <p>Review Settings</p>
          </Link>
        </li>
      </ul>
    </nav>
  )
}

export default MenuItem;