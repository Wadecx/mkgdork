import { TermsOfUse, TermsOfUseProps } from '@/containers';
import { Metadata } from 'next';

const TERMS_OF_USE_INFORMATIONS: TermsOfUseProps = {
  agencyEmail: 'contact@marketingbox.fr',
  agencyName: 'MarketingBox',
  agencyWebsite: 'https://marketingbox.fr',
  capital: 'Paris',
  contactEmail: 'contact@marketingbox.fr',
  contactPhone: '+33 6 00 00 00 00',
  companyName: 'MarketingBox',
  headquarters: '75 rue de la République, 75007 Paris',
  hostAddress: '75 rue de la République, 75007 Paris',
  hostName: 'O2Switch',
  hostPhone: '+33 6 00 00 00 00',
  hostWebsite: 'https://marketingbox.fr',
  legalCity: 'Paris',
  legalForm: 'SAS',
  publicationManager: 'contact@marketingbox.fr',
  rcs: '75 rue de la République, 75007 Paris',
  rgpdEmail: 'contact@marketingbox.fr',
  siret: '12345678901234',
  siteName: 'MarketingBox',
  vatNumber: 'FR123456789012',
};

export const metadata: Metadata = {
  title: 'Mentions Légales',
  description: 'Mentions Légales du site ...',
};

export default function MentionsLegalesPage() {
  return <TermsOfUse {...TERMS_OF_USE_INFORMATIONS} />;
}
