import { content } from "./content"

const { aPropos, infos } = content
const adresse = `${infos.address}, ${infos.zip} ${infos.city}`

/** Pages légales (texte type à compléter : n° ADELI/RPPS, SIRET, hébergeur). */
export const legal = {
  mentions: {
    title: 'Mentions légales',
    body: `## Éditeur du site

${aPropos.title} — ${adresse}
Téléphone : ${infos.phone} — Email : ${infos.email}
N° ADELI / RPPS : à compléter — SIRET : à compléter

## Hébergement

Site créé avec Omela. Hébergeur : à compléter.

## Propriété intellectuelle

Les textes et images de ce site sont protégés. Toute reproduction sans autorisation est interdite.

## Avertissement

Les informations publiées sur ce site sont générales et ne remplacent pas une consultation. En cas d'urgence, appelez le 15.`,
  },
  confidentialite: {
    title: 'Politique de confidentialité',
    body: `## Données collectées

Ce site ne collecte aucune donnée personnelle via formulaire. Les échanges par email ou téléphone servent uniquement à répondre à votre demande.

## Durée de conservation

Les emails reçus sont conservés le temps nécessaire au traitement de la demande, puis supprimés.

## Vos droits

Conformément au RGPD, vous disposez d'un droit d'accès, de rectification et de suppression de vos données. Écrivez à ${infos.email}.

## Prise de rendez-vous

La prise de rendez-vous en ligne est assurée par un service tiers, soumis à sa propre politique de confidentialité.`,
  },
}
