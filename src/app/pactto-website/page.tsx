import { Metadata } from 'next';
import { PacttoWebsite } from './index'
import '@/../styles/index.css';

export const metadata: Metadata = {
  description: 'pactto website',
  title: 'pactto website',
}

export default function Page() {
  return <PacttoWebsite />
}
