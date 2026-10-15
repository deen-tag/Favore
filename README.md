# Favore Studio — version retravaillée

Site vitrine Next.js, React et React Three Fiber pour présenter les trois expertises de Favore : sites web, applications et automatisations.

## Lancer le projet

Prérequis : Node.js 18.17 ou plus récent.

```bash
npm install
npm run dev
```

Ouvrir http://localhost:3000.

## Déploiement avec GitHub et Vercel

1. Décompressez l’archive.
2. Remplacez les fichiers correspondants dans votre dépôt GitHub (ou copiez le dossier `favore-work` dans votre projet en conservant le nom de dossier attendu).
3. Vérifiez que `package.json` est à la racine du projet Next.js détecté par Vercel.
4. Committez et poussez les changements. Vercel lancera un nouveau déploiement automatiquement si le dépôt est connecté.
5. Si le projet est dans un sous-dossier, réglez le **Root Directory** de Vercel sur ce dossier.

## Vérification avant publication

```bash
npm run build
npm run start
```

Le build n’a pas été exécuté dans l’environnement de préparation. Lancez impérativement `npm run build` ou vérifiez le résultat du déploiement Vercel avant de considérer cette version comme validée.

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
