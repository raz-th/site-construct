import { metadata as allMetadata } from '@/config/config';
import GaleriePage from './gal';

export const metadata = allMetadata["/galerie"];

export default function Page() {
  return <GaleriePage />;
}