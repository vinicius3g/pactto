import { Metadata } from 'next';
import { ItensToReview } from '.';
import '@/../styles/index.css';

export const metadata: Metadata = {
  description: 'itens to review page',
  title: 'itens to review',
}

export default function Page() {
  return <ItensToReview />
}
