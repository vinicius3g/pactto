import { Metadata } from 'next';
import { WebLinks } from '.';
import '@/../styles/index.css';

export const metadata: Metadata = {
  description: 'web links',
  title: 'web links',
}

export default function Page() {
  return <WebLinks />
}
