import { Dork } from '@/containers/home/dork';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '',
  description: '',
};

export default function HomePage() {
  return <>
  <Dork/>
  </>;
}
