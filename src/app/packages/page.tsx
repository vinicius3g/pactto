import { Metadata } from 'next';
import { Packages } from './index'
import '@/../styles/index.css';

export const metadata: Metadata = {
  description: 'packages website',
  title: 'packages',
}

export default function Page() {
  return <Packages />
}
