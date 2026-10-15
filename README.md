# Favore Studio — V10 visuels intégrés

Cette version repart du projet Favore fourni en V8 et intègre quatre visuels locaux dans `public/images/` : une composition principale, une image pour la création web, une pour les applications et une pour l'automatisation.

## Installation

1. Décompressez l'archive.
2. Intégrez le contenu de `favore-work` à la racine du dépôt GitHub connecté à Vercel.
3. Poussez les modifications et vérifiez les logs de build Vercel.

Les visuels sont servis localement par le site ; aucune URL d'image externe n'est utilisée. Les images des cartes de service sont chargées avec `loading="lazy"`.

## Vérification

Le code source a été modifié pour référencer les nouveaux visuels. Le build Next.js n'a pas été exécuté dans cet environnement : vérifiez le déploiement Vercel avant de publier la version comme finale.
