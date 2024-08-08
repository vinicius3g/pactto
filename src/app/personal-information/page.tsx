import { Metadata } from 'next';
import { PersonalInformation } from '.';
import '@/../styles/index.css';

export const metadata: Metadata = {
  description: 'personal information',
  title: 'personal information',
}


export default function Page() {
  return <PersonalInformation />
}
