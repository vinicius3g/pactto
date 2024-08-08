import { Metadata } from 'next';
import { Settings } from '.'
import '@/../styles/index.css';

export const metadata: Metadata = {
  description: 'settings',
  title: 'settings',
}


export default function Page() {
  return <Settings />
}
