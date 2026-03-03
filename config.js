/**
 * ============================================================
 *  ALBA MINDESTHETIC - FICHIER DE CONFIGURATION
 * ============================================================
 *  Ce fichier contient toutes les données modifiables du site.
 *  Pour mettre à jour le contenu, modifiez uniquement ce fichier.
 *  Aucune connaissance en code n'est nécessaire.
 * ============================================================
 */

const CONFIG = {

  // ----------------------------------------------------------
  //  LIENS IMPORTANTS
  // ----------------------------------------------------------

  /** Lien vers votre page Planity pour la prise de rendez-vous */
  planity_url: "https://www.planity.com/alba-mindesthetic-studio-74370-annecy",

  /** Lien vers votre compte Instagram */
  instagram_url: "https://www.instagram.com/alba_mindesthetic/",

  /** Numéro de téléphone (format sans espaces pour le lien tel:) */
  telephone: "0765648352",

  /** Numéro de téléphone affiché à l'écran */
  telephone_affiche: "07 65 64 83 52",


  // ----------------------------------------------------------
  //  HORAIRES D'OUVERTURE
  //  Modifiez les heures ou remplacez par "Fermé"
  // ----------------------------------------------------------

  horaires: [
    { jour: "Lundi",    heures: "11:00 - 22:00" },
    { jour: "Mardi",    heures: "11:00 - 22:00" },
    { jour: "Mercredi", heures: "11:00 - 22:00" },
    { jour: "Jeudi",    heures: "11:00 - 22:00" },
    { jour: "Vendredi", heures: "11:00 - 22:00" },
    { jour: "Samedi",   heures: "11:00 - 22:00" },
    { jour: "Dimanche", heures: "13:00 - 18:00" },
  ],


  // ----------------------------------------------------------
  //  GALERIE PHOTOS
  //  Ajoutez le nom du fichier image (placé dans le dossier du site)
  //  et une légende. Laissez "fichier" vide pour un emplacement réservé.
  // ----------------------------------------------------------

  galerie: [
    { fichier: 'logo_fond.jpg', legende: "Ajouter une photo" },
    { fichier: "logo_fond.jpg", legende: "Ajouter une photo" },
    { fichier: "logo_fond.jpg", legende: "Ajouter une photo" },
    { fichier: "logo_fond.jpg", legende: "Ajouter une photo" },
    { fichier: "logo_fond.jpg", legende: "Ajouter une photo" },
    { fichier: "logo_fond.jpg", legende: "Ajouter une photo" },
  ],


  // ----------------------------------------------------------
  //  SERVICES & TARIFS
  //  Chaque service contient :
  //    - id         : identifiant interne (ne pas modifier)
  //    - titre      : nom affiché
  //    - icone      : code SVG de l'icône (avancé)
  //    - description: texte affiché sur la carte service
  //    - a_savoir   : conseils avant/après séance (optionnel)
  //    - contre_indications : contre-indications (optionnel)
  //    - tarifs     : liste de prestations avec prix
  //    - forfaits   : liste de forfaits combinés (optionnel)
  // ----------------------------------------------------------

  services: [

    // ── ÉPILATION LASER FEMME ──────────────────────────────
    {
      id: "laser-femme",
      titre: "Épilation Laser Femme",
      icone: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z"/>
        <path d="M12 6v6l4 2"/>
      </svg>`,
      description: "Technologie Diode dernière génération pour une épilation efficace, rapide et durable. Bilan épilation offert — 30 minutes.",
      a_savoir: "Évitez l'exposition au soleil 48h avant et après la séance. Rasez la zone à traiter la veille. N'utilisez pas de cire ou de pince dans les 4 semaines précédant la séance. Hydratez bien votre peau.",
      contre_indications: "Grossesse, peau bronzée ou auto-bronzante, tatouage sur la zone à traiter, prise de certains médicaments photosensibilisants. Une consultation préalable est obligatoire.",
      tarifs: [
        { prestation: "Petites zones (inter sourcils, menton, joues...)", duree: "40min", prix: "40 €" },
        { prestation: "Aisselles",                                          duree: "45min", prix: "50 €" },
        { prestation: "Avant-bras",                                         duree: "45min", prix: "90 €" },
        { prestation: "Bras complets",                                      duree: "50min", prix: "165 €" },
        { prestation: "Cuisses",                                            duree: "50min", prix: "140 €" },
        { prestation: "Demi-jambes (genoux et pieds offerts)",              duree: "50min", prix: "140 €" },
        { prestation: "Jambes entières (pieds offerts)",                    duree: "1h15",  prix: "240 €" },
        { prestation: "Maillot échancré (ligne ombilicale offerte)",        duree: "45min", prix: "75 €" },
        { prestation: "Maillot intégral (ligne ombilicale et SIF offerts)", duree: "1h",    prix: "105 €" },
        { prestation: "SIF",                                                duree: "40min", prix: "40 €" },
        { prestation: "Ligne ombilicale",                                   duree: "30min", prix: "40 €" },
        { prestation: "Fesses",                                             duree: "45min", prix: "Sur devis" },
      ],
      forfaits: [
        { prestation: "Maillot échancré + aisselles",                            duree: "1h15",  prix: "105 €" },
        { prestation: "Maillot intégral + aisselles",                            duree: "1h30",  prix: "135 €" },
        { prestation: "1/2 Jambes + aisselles",                                  duree: "1h15",  prix: "170 €" },
        { prestation: "1/2 Jambes + maillot échancré",                           duree: "1h30",  prix: "195 €" },
        { prestation: "1/2 Jambes + maillot intégral",                           duree: "1h30",  prix: "225 €" },
        { prestation: "Jambes complètes + aisselles",                            duree: "1h30",  prix: "270 €" },
        { prestation: "Jambes complètes + maillot échancré",                     duree: "1h30",  prix: "295 €" },
        { prestation: "Jambes complètes + maillot intégral",                     duree: "1h30",  prix: "325 €" },
        { prestation: "1/2 Jambes + maillot échancré + aisselles",               duree: "1h30",  prix: "235 €" },
        { prestation: "1/2 Jambes + maillot intégral + aisselles",               duree: "1h30",  prix: "265 €" },
        { prestation: "Jambes complètes + maillot échancré + aisselles",         duree: "1h30",  prix: "335 €" },
        { prestation: "Jambes complètes + maillot intégral + aisselles",         duree: "1h30",  prix: "365 €" },
      ],
    },

    // ── ÉPILATION LASER HOMME ──────────────────────────────
    {
      id: "laser-homme",
      titre: "Épilation Laser Homme",
      icone: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
        <circle cx="12" cy="8" r="5"/>
        <path d="M3 21v-2a7 7 0 0114 0v2"/>
      </svg>`,
      description: "Solutions adaptées pour tous les types de peaux et toutes les zones du corps masculin. Bilan épilation offert — 30 minutes.",
      a_savoir: "Rasez la zone à traiter la veille. Évitez l'exposition au soleil 48h avant et après. N'utilisez pas de déodorant sur les aisselles le jour de la séance. Hydratez bien votre peau.",
      contre_indications: "Peau bronzée ou auto-bronzante, certains médicaments photosensibilisants, tatouage sur la zone traitée. Consultation préalable obligatoire.",
      tarifs: [
        { prestation: "Petites zones (inter sourcils, menton, joues...)", duree: "40min", prix: "50 €" },
        { prestation: "Col de chemise",                                   duree: "40min", prix: "50 €" },
        { prestation: "Aisselles",                                        duree: "45min", prix: "60 €" },
        { prestation: "Avant-bras (mains offertes)",                      duree: "50min", prix: "105 €" },
        { prestation: "Bras entiers (mains offertes)",                    duree: "1h",    prix: "180 €" },
        { prestation: "Torse (cou inclus)",                               duree: "50min", prix: "125 €" },
        { prestation: "Épaules",                                          duree: "40min", prix: "90 €" },
        { prestation: "Ventre",                                           duree: "40min", prix: "110 €" },
        { prestation: "Contour de barbe",                                 duree: "40min", prix: "60 € à 90 €" },
        { prestation: "Haut du dos",                                      duree: "45min", prix: "80 €" },
        { prestation: "Bas du dos",                                       duree: "45min", prix: "80 €" },
        { prestation: "Dos complet (épaules comprises)",                  duree: "1h15",  prix: "190 €" },
        { prestation: "Fesses",                                           duree: "45min", prix: "120 €" },
        { prestation: "SIF",                                              duree: "40min", prix: "50 €" },
        { prestation: "Maillot échancré",                                 duree: "40min", prix: "95 €" },
        { prestation: "1/2 Jambes (genoux et pieds offerts)",             duree: "1h",    prix: "160 €" },
        { prestation: "Cuisses",                                          duree: "1h",    prix: "160 €" },
        { prestation: "Jambes complètes (pieds offerts)",                 duree: "1h30",  prix: "270 €" },
      ],
      forfaits: [
        { prestation: "Col de chemise + épaules",           duree: "1h15", prix: "120 €" },
        { prestation: "Col de chemise + torse",             duree: "1h30", prix: "155 €" },
        { prestation: "Torse + épaules",                   duree: "1h30", prix: "195 €" },
        { prestation: "Torse + ventre",                    duree: "1h30", prix: "215 €" },
        { prestation: "Torse + dos complet",               duree: "2h",   prix: "295 €" },
        { prestation: "Col de chemise + torse + épaules",  duree: "1h30", prix: "235 €" },
        { prestation: "Col de chemise + torse + dos complet", duree: "2h", prix: "335 €" },
      ],
    },

    // ── SOINS VISAGE HYDRACTIVE ────────────────────────────
    {
      id: "hydractive",
      titre: "Soins Visage HydrActive",
      icone: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
        <path d="M12 2.69l5.66 5.66a8 8 0 11-11.31 0z"/>
      </svg>`,
      description: "Technologie avancée alliant nettoyage profond, exfoliation, extraction et hydratation en un seul traitement. Votre peau ressort visiblement plus lumineuse, hydratée et revitalisée.",
      a_savoir: "Venez sans maquillage de préférence. Évitez les exfoliants 48h avant. Hydratez bien votre peau après la séance et protégez-la du soleil. Les résultats sont visibles dès la première séance.",
      contre_indications: "Acné inflammatoire sévère, rosacée active, plaies ouvertes ou infections cutanées sur la zone traitée. Consultez un dermatologue en cas de doute.",
      tarifs: [
        { prestation: "HydraBoost (durée du soin 50 min)",                    duree: "1h30",  prix: "140 €" },
        { prestation: "HydraSuprême (durée du soin 1h20)",                    duree: "1h45",  prix: "180 €" },
        { prestation: "Hydraboost 3 séances (luminothérapie offerte)",        duree: "1h",    prix: "405 €" },
        { prestation: "HydraSuprême 3 séances",                               duree: "1h20",  prix: "525 €" },
        { prestation: "HydrAdos 15/18 ans (durée du soin 35 min)",            duree: "1h",    prix: "70 €" },
        { prestation: "Luminothérapie (en complément)",                       duree: "20min", prix: "25 €" },
      ],
    },

    // ── RADIOFRÉQUENCE VISAGE ──────────────────────────────
    {
      id: "radiofrequence",
      titre: "Radiofréquence Visage",
      icone: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
        <path d="M4.93 4.93l4.24 4.24"/>
        <path d="M14.83 9.17l4.24-4.24"/>
        <path d="M14.83 14.83l4.24 4.24"/>
        <path d="M9.17 14.83l-4.24 4.24"/>
        <circle cx="12" cy="12" r="4"/>
      </svg>`,
      description: "Raffermit la peau, lisse les rides et redéfinit les contours pour un effet lifting visible et durable. Idéal en cure de plusieurs séances.",
      a_savoir: "Buvez beaucoup d'eau avant et après la séance. Évitez les expositions solaires prolongées. Appliquez une bonne crème hydratante après le soin. Des sensations de chaleur légères sont normales.",
      contre_indications: "Grossesse, implants métalliques ou stimulateurs cardiaques, épilepsie, maladies cutanées actives sur la zone traitée, cancer.",
      tarifs: [
        { prestation: "Séance visage (30 minutes)",                         duree: "50min",  prix: "80 €" },
        { prestation: "Séance visage + cou (40 minutes)",                   duree: "1h",     prix: "120 €" },
        { prestation: "Séance visage + cou + décolleté (50 minutes)",       duree: "1h15",   prix: "140 €" },
        { prestation: "Luminothérapie (en complément)",                     duree: "20min",  prix: "25 €" },
        { prestation: "6 séances visage",                                   duree: "30min",  prix: "420 €" },
        { prestation: "6 séances visage + cou",                             duree: "40min",  prix: "650 €" },
        { prestation: "6 séances visage + cou + décolleté",                 duree: "1h",     prix: "740 €" },
        { prestation: "10 séances visage",                                  duree: "30min",  prix: "620 €" },
        { prestation: "Radiofréquence corps",                               duree: "30min",  prix: "Sur devis" },
      ],
    },

    // ── LIPOCAVITATION CORPS ───────────────────────────────
    {
      id: "lipocavitation",
      titre: "Lipocavitation Corps",
      icone: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
        <ellipse cx="12" cy="12" rx="10" ry="6"/>
        <path d="M12 6v12"/>
      </svg>`,
      description: "Ultrasons pour décomposer naturellement les graisses localisées et affiner la silhouette. Idéal pour lisser la peau et modeler les contours.",
      a_savoir: "Buvez 1,5 à 2 litres d'eau le jour de la séance pour favoriser l'élimination des graisses. Évitez l'alcool 48h avant et après. Un programme de plusieurs séances est recommandé pour des résultats optimaux.",
      contre_indications: "Grossesse, allaitement, insuffisance rénale ou hépatique, troubles de la coagulation, stimulateurs cardiaques, cancer, inflammation locale.",
      tarifs: [
        { prestation: "Lipocavitation corps 30 min", duree: "1h",    prix: "60 €" },
        { prestation: "Lipocavitation corps 40 min", duree: "1h15",  prix: "80 €" },
        { prestation: "Lipocavitation corps 60 min", duree: "1h30",  prix: "120 €" },
        { prestation: "4 séances corps 30 min",      duree: "30min", prix: "220 €" },
        { prestation: "4 séances corps 40 min",      duree: "1h15",  prix: "300 €" },
        { prestation: "4 séances corps 60 min",      duree: "1h30",  prix: "460 €" },
        { prestation: "6 séances corps 30 min",      duree: "30min", prix: "300 €" },
        { prestation: "6 séances corps 40 min",      duree: "1h15",  prix: "420 €" },
        { prestation: "6 séances corps 60 min",      duree: "1h30",  prix: "660 €" },
        { prestation: "Pressothérapie (en complément)", duree: "30min", prix: "Sur devis" },
      ],
    },

    // ── CRYOLIPOLYSE ───────────────────────────────────────
    {
      id: "cryolipolyse",
      titre: "Cryolipolyse",
      icone: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
        <path d="M12 2v20M2 12h20M6 6l12 12M18 6L6 18"/>
      </svg>`,
      description: "Technique d'amincissement et de raffermissement par le froid pour éliminer les cellules graisseuses, lisser la cellulite et remodeler la silhouette.",
      a_savoir: "Des rougeurs et une légère sensibilité après la séance sont normales et temporaires. Portez des vêtements amples le jour du soin. Massez doucement la zone traitée les jours suivants pour accélérer les résultats.",
      contre_indications: "Grossesse, allaitement, hernie sur la zone à traiter, troubles de la sensibilité au froid (cryoglobulinémie, maladie de Raynaud), pacemaker, cancer actif.",
      tarifs: [
        { prestation: "Cryolipolyse — 1 zone",                          duree: "1h30",  prix: "190 €" },
        { prestation: "Cryolipolyse — 2 zones (simultanément)",         duree: "1h45",  prix: "250 €" },
        { prestation: "Cryolipolyse — 3 zones (simultanément)",         duree: "1h45",  prix: "295 €" },
        { prestation: "Cryolipolyse — 1 zone + pressothérapie",         duree: "1h30",  prix: "240 €" },
        { prestation: "Cryolipolyse — 2 zones + pressothérapie",        duree: "1h45",  prix: "300 €" },
        { prestation: "Cryolipolyse — 3 zones + pressothérapie",        duree: "1h45",  prix: "345 €" },
        { prestation: "Pressothérapie (en complément)",                  duree: "50min", prix: "Sur devis" },
      ],
    },

    // ── MODELAGE JAPONAIS ──────────────────────────────────
    {
      id: "modelage-japonais",
      titre: "Modelage Japonais",
      icone: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
        <path d="M12 22C6.5 22 2 17.5 2 12S6.5 2 12 2s10 4.5 10 10-4.5 10-10 10z"/>
        <path d="M12 8c-2.2 0-4 1.8-4 4s1.8 4 4 4 4-1.8 4-4-1.8-4-4-4z"/>
        <path d="M8.5 8.5L6 6M15.5 8.5L18 6M8.5 15.5L6 18M15.5 15.5L18 18"/>
      </svg>`,
      description: "Soin ancestral japonais alliant pressions, étirements et effleurages pour libérer les tensions, harmoniser le corps et l'esprit, et apporter une profonde sérénité.",
      a_savoir: "Venez dans un état de détente, évitez les repas copieux dans les 2 heures précédant le soin. Prévoyez du temps après la séance pour prolonger l'état de bien-être. Buvez de l'eau après le massage.",
      contre_indications: "Fièvre, infections cutanées, phlébite, grossesse (premier trimestre), fractures récentes ou inflammations aiguës sur les zones à masser.",
      tarifs: [
        { prestation: "Modelage japonais 30 min",  duree: "30min", prix: "45 €" },
        { prestation: "Modelage japonais 1h",      duree: "1h",    prix: "80 €" },
        { prestation: "Modelage japonais 1h30",    duree: "1h30",  prix: "115 €" },
        { prestation: "Forfait 3 séances 1h",      duree: "1h",    prix: "225 €" },
        { prestation: "Forfait 5 séances 1h",      duree: "1h",    prix: "370 €" },
      ],
    },

  ], // fin services

}; // fin CONFIG
