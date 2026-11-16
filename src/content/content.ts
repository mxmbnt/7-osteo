/**
 * Contenu du site — praticien FICTIF (à remplacer avant mise en ligne).
 * Structure = sections Omela (cf. schema.ts) : tout peut venir d'une base de données.
 */
import { validateContent, type SiteContent } from './schema'

/** Lien unique de prise de rendez-vous (future `bookingHref` Omela) — PROCESS §4 */
export const BOOKING_HREF = 'https://www.doctolib.fr/osteopathe/nantes/thomas-bernard'

export const content: SiteContent = validateContent({
  nav: {
    logo: '/img/client/logo.svg',
    links: [
      { label: 'Approche', href: '#deroulement' },
      { label: 'Motifs', href: '#motifs' },
      { label: 'Tarifs', href: '#tarifs' },
      { label: 'Avis', href: '#avis' },
      { label: 'Infos', href: '#infos' },
    ],
    rdvLabel: 'Prendre rendez-vous',
  },

  hero: {
    headline: 'Une ostéopathie douce pour vivre mieux',
    subheadline: 'Ostéopathe D.O. au cœur de Nantes, j’accompagne adultes, sportifs, futures mamans et tout-petits, avec écoute et douceur.',
    cta: { label: 'Prendre rendez-vous', href: BOOKING_HREF },
    photo: '/img/client/hero.webp',
  },

  aPropos: {
    name: 'Thomas Bernard',
    title: 'Thomas Bernard, ostéopathe D.O.',
    bio:
      'Diplômé en ostéopathie après cinq années de formation, j’exerce à Nantes depuis 2014. Avant tout geste, je prends le temps de **comprendre votre histoire** et de vous expliquer ce que j’observe.\n\nJe travaille en lien avec les médecins, kinésithérapeutes et sages-femmes de l’agglomération nantaise.',
    photo: '/img/client/praticien.webp',
    badges: ['Diplôme d’ostéopathe D.O.', 'Inscrit au registre des ostéopathes', 'Formation en périnatalité', 'Suivi du sportif'],
  },

  deroulement: {
    title: 'Comment se passe une séance ?',
    intro: 'Chaque consultation suit un déroulé clair, de la prise de rendez-vous aux conseils de fin de séance.',
    steps: [
      { title: 'Un temps d’écoute', desc: 'Nous commençons par échanger sur votre histoire, vos habitudes et vos attentes.' },
      { title: 'Un bilan complet', desc: 'Des tests de mobilité permettent de comprendre l’origine possible de la gêne.' },
      { title: 'Des conseils concrets', desc: 'Vous repartez avec des repères simples à appliquer au quotidien.' },
    ],
  },

  publics: {
    title: 'Les patients que j’accompagne',
    intro: 'L’ostéopathie s’adresse à chacun, à tous les âges de la vie. Les techniques sont toujours adaptées à l’âge et à la situation.',
    items: [
      { title: 'Adultes actifs', desc: 'Travail sur écran, port de charges, stress : une prise en charge globale, en complément de votre suivi médical.' },
      { title: 'Femmes enceintes', desc: 'Des séances très douces pendant la grossesse et après l’accouchement, en lien avec votre sage-femme.' },
      { title: 'Seniors', desc: 'Un accompagnement attentif de la mobilité au quotidien, à votre rythme et selon votre confort.' },
    ],
  },

  motifs: {
    intro: 'Voici les motifs pour lesquels on me consulte le plus souvent. En cas de doute, n’hésitez pas à me poser la question.',
    items: [
      { title: 'Dos et lombaires', desc: 'Raideurs et tensions du bas du dos, gênes en position assise prolongée.' },
      { title: 'Nuque et épaules', desc: 'Cervicales, tensions liées au travail sur écran.' },
      { title: 'Grossesse', desc: 'Un accompagnement doux avant et après la naissance.' },
      { title: 'Nourrissons et enfants', desc: 'Des séances très douces, toujours en présence d’un parent, en lien avec le pédiatre.' },
      { title: 'Suivi du sportif', desc: 'Préparation, récupération et accompagnement de la pratique sportive.' },
      { title: 'Stress et tensions', desc: 'Des techniques douces pour accompagner les tensions du quotidien.' },
    ],
  },

  tarifs: {
    intro: 'Des tarifs clairs, sans dépassement. Une facture vous est remise à chaque séance pour votre mutuelle.',
    lines: [
      { label: 'Consultation adulte', price: '60 €', note: 'Séance de 45 min à 1 h, bilan et conseils compris.' },
      { label: 'Femme enceinte', price: '65 €', note: 'Séance adaptée à chaque trimestre.' },
      { label: 'Enfant et nourrisson', price: '50 €', note: 'Toujours en présence d’un parent.' },
    ],
    remboursement:
      'L’ostéopathie n’est pas remboursée par l’Assurance maladie, mais de nombreuses mutuelles prennent en charge plusieurs séances par an. Renseignez-vous auprès de la vôtre.',
  },

  avis: {
    intro: 'Quelques retours de patients, partagés avec leur accord. Chaque prise en charge reste unique.',
    items: [
      { author: 'Amandine R.', rating: 5, text: 'De la prise de rendez-vous en ligne jusqu’à la fin de la séance, tout a été simple et rassurant. L’ostéopathe a pris le temps de m’expliquer chaque étape.' },
      { author: 'Marc E.', rating: 5, text: 'J’étais un peu sceptique au départ, mais l’approche douce et pédagogique m’a convaincu. On se sent vraiment écouté.' },
      { author: 'Julie B.', rating: 5, text: 'Je consultais pour la première fois et j’appréhendais un peu. L’accueil a été chaleureux et les conseils me servent encore aujourd’hui.' },
      { author: 'Sandra L.', rating: 5, text: 'Cabinet calme et lumineux, et un praticien qui prend vraiment le temps. Je me sens écoutée, ce qui change tout.' },
    ],
  },

  blog: { intro: 'Mes derniers articles pour mieux comprendre votre corps et prendre soin de vous.' },

  faq: {
    items: [
      { q: 'Comment se déroule une première séance ?', a: 'La séance commence par un échange sur votre histoire et vos habitudes, suivi de tests de mobilité. Le travail manuel est ensuite adapté à votre situation et à votre confort.' },
      { q: 'La consultation est-elle remboursée ?', a: 'L’ostéopathie n’est pas remboursée par l’Assurance maladie, mais de nombreuses mutuelles prennent en charge plusieurs séances par an. Une facture vous est remise à chaque consultation.' },
      { q: 'Faut-il une ordonnance ?', a: 'Non, vous pouvez consulter directement. En cas de signe d’alerte, je vous oriente vers votre médecin.' },
      { q: 'Combien de séances sont nécessaires ?', a: 'Cela dépend de chaque situation. Nous faisons le point ensemble à la fin de chaque séance, sans engagement sur un nombre de consultations.' },
    ],
  },

  infos: {
    address: '12 rue Crébillon',
    zip: '44000',
    city: 'Nantes',
    phone: '02 40 00 12 34',
    email: 'contact@thomas-bernard-osteo.fr',
    hours: [
      { day: 'Lundi', value: '9 h – 20 h' },
      { day: 'Mardi', value: '9 h – 20 h' },
      { day: 'Mercredi', value: '9 h – 13 h' },
      { day: 'Jeudi', value: '9 h – 20 h' },
      { day: 'Vendredi', value: '9 h – 19 h' },
      { day: 'Samedi', value: '9 h – 12 h' },
    ],
    access: 'Tramway ligne 1, arrêt Commerce (3 min à pied). Parking Graslin à proximité. Cabinet au rez-de-chaussée, accessible aux personnes à mobilité réduite.',
    bookingHref: BOOKING_HREF,
  },

  contact: { intro: 'Une question avant de prendre rendez-vous ? Appelez-moi ou écrivez-moi, je vous réponds sous 24 h ouvrées.' },

  footer: {
    socials: {
      instagram: 'https://www.instagram.com/',
      facebook: 'https://www.facebook.com/',
      linkedin: 'https://www.linkedin.com/',
    },
  },
})

/** Libellés fixes du template (titres de sections, boutons) — pas des contenus client */
export const ui = {
  aProposLabel: 'Votre ostéopathe',
  badgesTitle: 'Diplômes et formations',
  motifsTitle: 'Les motifs de consultation',
  tarifsTitle: 'Des tarifs clairs et transparents',
  perSession: '/séance',
  remboursementTitle: 'Remboursement',
  avisTitle: 'Ce qu’en disent mes patients',
  blogTitle: 'Mes derniers conseils',
  blogAll: 'Tous les articles',
  readMore: 'Lire l’article',
  faqTitle: 'Vos questions, mes réponses',
  infosTitle: 'Infos pratiques',
  hoursTitle: 'Horaires',
  accessTitle: 'Accès',
  mapTitle: 'Plan d’accès',
  contactTitle: 'Une question ?',
  call: 'Appeler le',
  scroll: 'Défiler',
  footerPages: 'Pages',
  footerInfos: 'Informations',
  footerContact: 'Coordonnées',
  legal: 'Mentions légales',
  privacy: 'Confidentialité',
  madeWith: 'Site créé avec Omela',
}
