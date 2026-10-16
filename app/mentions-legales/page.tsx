import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mentions légales — Favore®",
  robots: { index: false }
};

// À COMPLÉTER : remplacez chaque texte entre [crochets] avant de publier.
export default function MentionsLegales() {
  return (
    <main className="legal wrap">
      <a href="/">← Retour au site</a>
      <h1>Mentions légales</h1>

      <h2>Éditeur du site</h2>
      <p>
        Favore — [Prénom NOM de l’exploitant ou raison sociale]<br />
        Micro-entrepreneur (entrepreneur individuel) — SIRET : [numéro SIRET]<br />
        [Adresse professionnelle, code postal, ville]<br />
        Email : <a href="mailto:bonjour@favore.fr">bonjour@favore.fr</a><br />
        TVA non applicable, art. 293 B du CGI
      </p>

      <h2>Directeur de la publication</h2>
      <p>[Prénom NOM]</p>

      <h2>Hébergeur</h2>
      <p>Vercel Inc. — 440 N Barranca Ave #4133, Covina, CA 91723, États-Unis — vercel.com</p>

      <h2>Données personnelles</h2>
      <p>
        Le formulaire de contact n’enregistre aucune donnée sur le site : il ouvre votre application mail avec
        un message prérempli. Les informations que vous nous envoyez (nom, email, description du projet) sont
        utilisées uniquement pour répondre à votre demande et ne sont ni revendues ni transmises à des tiers.
        Vous pouvez demander l’accès, la rectification ou la suppression de vos données en écrivant à{" "}
        <a href="mailto:bonjour@favore.fr">bonjour@favore.fr</a>.
      </p>

      <h2>Propriété intellectuelle</h2>
      <p>
        Les textes, visuels et éléments graphiques du site sont la propriété de Favore, sauf mention contraire.
        Toute reproduction sans autorisation est interdite.
      </p>
    </main>
  );
}
