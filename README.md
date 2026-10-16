# Favore Studio

Site vitrine Next.js pour Favore : création de sites web, applications et automatisations.

## Lancer le projet

Prérequis : Node.js 18.17+.

```bash
npm install
npm run dev
```

Ouvrir ensuite http://localhost:3000.

## Vérifier avant publication

```bash
npm run build
npm start
```

## Modifications de cette version

- Message d’accueil recentré sur la création de sites web professionnels.
- Section « Tarifs indicatifs » (3 fourchettes) et FAQ enrichie (prix, délais).
- Formulaire de contact (nom, email, type de projet, budget, message).
- Textes réécrits (moins de formules vagues), page Mentions légales à compléter (`app/mentions-legales/page.tsx`).
- Lisibilité (textes plus grands), boutons devis (cartes tarifs, barre fixe mobile), exemples dans les cartes de services, code 3D inutilisé supprimé.
- Ajout d’une FAQ accessible avec des éléments natifs `details` / `summary`.
- Liens de navigation vers les nouvelles sections et cible du lien d’évitement corrigée.
- Métadonnées de partage clarifiées.

