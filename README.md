# Favore Studio — version retravaillée

Site vitrine Next.js, React et React Three Fiber pour présenter les trois expertises de Favore : sites web, applications et automatisations.

## Lancer le projet

Prérequis : Node.js 18.17 ou plus récent.

```bash
npm install
npm run dev
```

Ouvrir http://localhost:3000.

## Vérification avant publication

```bash
npm run build
npm run start
```

Le build n'a pas pu être exécuté dans l'environnement de préparation, car les dépendances npm n'y étaient pas installées (`next: not found`). Il faut donc impérativement lancer les commandes ci-dessus et corriger toute erreur avant mise en ligne.

## À vérifier avant mise en production

- Tester les versions mobile et ordinateur, dont un téléphone peu puissant.
- Vérifier la navigation au clavier, le menu mobile et les préférences de réduction des animations.
- Confirmer que `bonjour@favore.fr` est bien l'adresse de contact souhaitée.
- Remplacer les éventuelles informations de démonstration par des réalisations réelles ou des projets conceptuels clairement identifiés.
- Vérifier le domaine et les métadonnées SEO avant publication.

## Fichiers

- `app/site.tsx` : sections et contenu du site.
- `app/scene.tsx` : scène 3D.
- `app/globals.css` : styles, responsive et accessibilité.
- `app/layout.tsx` : métadonnées.


## Favore V7 — pack d'images intégré
Cette version contient quatre visuels WebP locaux dans `public/images/` et les références correspondantes dans `app/site.tsx`. L'image de hero remplace la scène Three.js dans la page d'accueil ; les trois cartes d'expertise utilisent leurs visuels locaux. Aucun hébergement d'image externe n'est requis.

Avant publication : exécuter `npm install` puis `npm run build`, et vérifier le rendu sur mobile et ordinateur.


## Correctif visuel V8
- Le visuel principal utilise désormais un cadrage centré sur les appareils et le bureau, plutôt qu’une capture de page complète intégrée dans la page.
- Les images composites ont été retirées des cartes d’expertise : les illustrations CSS dédiées restent seules, pour éviter les maquettes imbriquées et les textes minuscules.
- Le build doit être vérifié sur Vercel avant mise en production.
