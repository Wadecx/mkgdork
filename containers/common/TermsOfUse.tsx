import React from 'react';
import { Section } from '@/components';

export type TermsOfUseProps = {
  /** Nom officiel du site (par exemple, "MonSite"). */
  siteName: string;
  /** Nom complet de l’entreprise propriétaire du site, tel qu’enregistré au RCS. */
  companyName: string;
  /** Forme juridique de l’entreprise (exemple: "SAS", "SARL", "EURL"). */
  legalForm: string;
  /** Capital social de l’entreprise (par exemple, "10 000€"). */
  capital: string;
  /** Adresse complète du siège social de l’entreprise. */
  headquarters: string;
  /** Référence d’enregistrement au RCS avec la ville (par exemple, "Paris B 123 456 789"). */
  rcs: string;
  /** Numéro SIRET de l’entreprise (14 chiffres). */
  siret: string;
  /** Numéro de TVA intracommunautaire (par exemple, "FR123456789"). */
  vatNumber: string;
  /** Nom de la personne responsable de la publication sur le site. */
  publicationManager: string;
  /** Adresse e-mail de contact général. */
  contactEmail: string;
  /** Numéro de téléphone de contact général. */
  contactPhone: string;
  /** Nom de l’hébergeur du site (par exemple, "Hébergeur SA"). */
  hostName: string;
  /** Adresse complète de l’hébergeur. */
  hostAddress: string;
  /** Numéro de téléphone de contact de l’hébergeur. */
  hostPhone: string;
  /** URL du site web de l’hébergeur. */
  hostWebsite: string;
  /** Adresse e-mail pour les demandes relatives à la protection des données (RGPD). */
  rgpdEmail: string;
  /** Ville dont dépend la juridiction compétente en cas de litige. */
  legalCity: string;
  /** Nom de l’agence ayant conçu le site (par exemple, "Marketing Box"). */
  agencyName: string;
  /** URL du site web de l’agence. */
  agencyWebsite: string;
  /** Adresse e-mail de contact de l’agence. */
  agencyEmail: string;
};

export const TermsOfUse = ({
  siteName,
  companyName,
  legalForm,
  capital,
  headquarters,
  rcs,
  siret,
  vatNumber,
  publicationManager,
  contactEmail,
  contactPhone,
  hostName,
  hostAddress,
  hostPhone,
  hostWebsite,
  rgpdEmail,
  legalCity,
  agencyName = 'Marketing Box',
  agencyWebsite = 'https://www.marketingbox.fr',
  agencyEmail = 'contact@marketingbox.fr',
}: TermsOfUseProps) => {
  return (
    <Section>
      <div className="space-y-12">
        <h1 className="text-5xl font-bold">Mentions Légales</h1>
        <h2 className="text-3xl font-bold">1. Éditeur du Site :</h2>
        <p>
          Le site <strong>{siteName}</strong> est édité par :
          <br />
          <strong>Raison sociale :</strong> {companyName}
          <br />
          <strong>Forme juridique :</strong> {legalForm}
          <br />
          <strong>Capital social :</strong> {capital}
          <br />
          <strong>Siège social :</strong> {headquarters}
          <br />
          <strong>RCS :</strong> {rcs}
          <br />
          <strong>Numéro SIRET :</strong> {siret}
          <br />
          <strong>Numéro de TVA intracommunautaire :</strong> {vatNumber}
          <br />
          <strong>Responsable de la publication :</strong> {publicationManager}
          <br />
          <strong>Email :</strong> {contactEmail}
          <br />
          <strong>Téléphone :</strong> {contactPhone}
        </p>

        <h2 className="text-3xl font-bold">2. Hébergement :</h2>
        <p>
          Le site <strong>{siteName}</strong> est hébergé par :
          <br />
          <strong>Raison sociale :</strong> {hostName}
          <br />
          <strong>Adresse :</strong> {hostAddress}
          <br />
          <strong>Téléphone :</strong> {hostPhone}
          <br />
          <strong>Site web :</strong> {hostWebsite}
        </p>

        <h2 className="text-3xl font-bold">3. Propriété intellectuelle :</h2>
        <p>
          L’ensemble des éléments présents sur ce site, notamment les textes,
          graphismes, logos, images, vidéos, sons, logiciels, etc., sont
          protégés par les dispositions du Code de la propriété intellectuelle
          et appartiennent à <strong>{companyName}</strong> ou font l'objet
          d'une autorisation d'utilisation. Toute reproduction, représentation,
          modification, publication, adaptation de tout ou partie des éléments
          de ce site, quel que soit le moyen ou le procédé utilisé, est
          interdite sans l'autorisation écrite préalable de {companyName}.
        </p>

        <h2 className="text-3xl font-bold">4. Données personnelles :</h2>
        <p>
          Conformément au Règlement Général sur la Protection des Données
          (RGPD), vous disposez d’un droit d’accès, de rectification,
          d’opposition, de suppression et de portabilité des informations qui
          vous concernent. Vous pouvez exercer ce droit en nous contactant par :
          <br />
          <strong>Email :</strong> {rgpdEmail}
          <br />
          <strong>Adresse postale :</strong> {headquarters}
          <br />
          <strong>Téléphone :</strong> {contactPhone}
        </p>

        <h2 className="text-3xl font-bold">5. Cookies :</h2>
        <p>
          Le site <strong>{siteName}</strong> utilise des cookies pour améliorer
          l’expérience utilisateur. Lors de votre première visite, un bandeau
          s’affiche pour vous informer de la finalité des cookies et vous
          permettre de les accepter ou de les refuser. Vous pouvez à tout moment
          configurer les paramètres des cookies dans votre navigateur.
        </p>

        <h2 className="text-3xl font-bold">6. Liens hypertextes :</h2>
        <p>
          Le site <strong>{siteName}</strong> peut contenir des liens
          hypertextes vers d’autres sites internet.{' '}
          <strong>{companyName}</strong> n’assume aucune responsabilité quant au
          contenu ou aux pratiques de ces sites tiers.
        </p>

        <h2 className="text-3xl font-bold">7. Responsabilité :</h2>
        <p>
          <strong>{companyName}</strong> met tout en œuvre pour fournir des
          informations exactes sur le site <strong>{siteName}</strong>.
          Toutefois, nous ne pouvons garantir l’exactitude, la complétude ou la
          mise à jour des informations publiées. <br />
          <strong>{companyName}</strong> ne saurait être tenue pour responsable
          des dommages directs ou indirects résultant de l’utilisation de ce
          site ou de l’impossibilité d’y accéder.
        </p>

        <h2 className="text-3xl font-bold">8. Droit applicable :</h2>
        <p>
          Les présentes mentions légales sont régies par le droit français. En
          cas de litige, et à défaut de résolution amiable, les tribunaux
          compétents seront ceux de <strong>{legalCity}</strong>.
        </p>

        <h2 className="text-3xl font-bold">9. Conception & Réalisation :</h2>
        <p>
          Ce site a été conçu et réalisé par l’agence{' '}
          <strong>{agencyName}</strong>.
          <br />
          <strong>Site web :</strong>{' '}
          <a href={agencyWebsite}>{agencyWebsite}</a>
          <br />
          <strong>Email :</strong> {agencyEmail}
        </p>

        <h2 className="text-3xl font-bold">10. Contact :</h2>
        <p>
          Pour toute question relative aux mentions légales, vous pouvez nous
          contacter :
          <br />
          <strong>Email :</strong> {contactEmail}
          <br />
          <strong>Adresse postale :</strong> {headquarters}
          <br />
          <strong>Téléphone :</strong> {contactPhone}
        </p>
      </div>
    </Section>
  );
};
