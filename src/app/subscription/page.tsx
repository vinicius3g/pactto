import { Metadata } from 'next';
import { Subscription } from '.'
import '@/../styles/index.css';

export const metadata: Metadata = {
  description: 'subscription',
  title: 'subscription',
}


export default function Page() {
  return <Subscription />
}
