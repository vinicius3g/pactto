import { VideoLibrary } from '.';
import '@/../styles/index.css';
import { Metadata } from 'next'

export const metadata: Metadata = {
  description: 'library page',
  title: 'library',
}

export default function Page() {
  return <VideoLibrary />
}
