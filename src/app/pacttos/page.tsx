import { Metadata } from 'next';
import { Pacttos } from '.'
import '@/../styles/index.css';

export const metadata: Metadata = {
  description: 'pacttos',
  title: 'pacttos',
}

export default function Page() {
  return <Pacttos />
}
