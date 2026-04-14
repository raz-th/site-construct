import { metadata as allMetadata } from '@/config/config';
import GaleriePage from './gal';
import { FakeNav } from '@/Components/Nav';

export const metadata = allMetadata["/galerie"];

export default function Page() {
  return <><FakeNav/><GaleriePage /></>;
}