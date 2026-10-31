# Mon Budget

Application Next.js / TypeScript en français, construite à partir des deux documents conservés dans ce dossier.

## Lancement

Node.js 22.13 ou ultérieur recommandé.

```sh
npm install
npm run dev
```

Ouvrir http://127.0.0.1:3000. Production : `npm run build` puis `npm start`.

## Fonctions et choix

Tableau de bord mensuel, opérations modifiables et supprimables avec confirmation, recherche et filtres, budgets par catégorie et mois, alertes de dépassement, devises EUR/USD/GBP séparées, export et restauration JSON validée. Les montants utilisent des centimes entiers et les dates des chaînes civiles. Le changement de devise principale réinitialise les plafonds après confirmation ; aucune conversion n’est effectuée.

Aucune donnée fictive n’est préchargée. Les opérations et plafonds résident dans localStorage sous `mon-budget`. Pas de compte, synchronisation, base de données ou connexion bancaire. L’effacement du navigateur peut détruire ces données : exporter régulièrement depuis Paramètres. Un import valide remplace les données après confirmation ; un import invalide les préserve.

## Vercel

Importer ce dossier dans un dépôt Git, puis créer un projet Vercel depuis ce dépôt. Choisir le preset Next.js, commande `npm run build`, installation `npm ci`. Aucune variable d’environnement requise. Déployer avec Vercel sur demande explicite. Le stockage reste propre au navigateur et à l’origine du site : les données locales ne migrent pas automatiquement vers l’URL déployée.

## Vérification

`npm test` vérifie les centimes, dates civiles, totaux par mois/devise, modifications, suppressions et validation des sauvegardes. `npm run typecheck` vérifie TypeScript ; `npm run build` vérifie la compilation de production. La persistance et les parcours UI nécessitent également une vérification dans le navigateur. Aucun test OCR réel possible sans fournisseur.

## iPhone et PWA

Interface mobile avec barre de navigation inférieure, zones sûres iOS, cibles tactiles, formulaires à taille lisible (sans bloquer le zoom) et opérations en cartes. Palette OLED : fond noir pur, cartes sombres, accents menthe, corail, lavande et ambre ; police système sans téléchargement externe.

Manifest standalone, icônes 192/512 et Apple 180, métadonnées iOS et service worker de production. Après une première visite en ligne et le chargement des ressources, le cache permet de rouvrir l’application hors connexion. Les données financières restent dans localStorage ; elles ne transitent pas dans le cache réseau. Le service worker n’est pas activé en développement pour éviter les versions périmées.

Sur iPhone : ouvrir l’adresse **HTTPS** dans Safari → Partager → Sur l’écran d’accueil → Ajouter. Le `127.0.0.1` de l’ordinateur n’est pas accessible depuis l’iPhone. Installation réelle et comportement du clavier/encoche à confirmer sur appareil iOS. Documentation : https://nextjs.org/docs/app/guides/progressive-web-apps et https://support.apple.com/guide/iphone/open-as-web-app-iphea86e5236/ios.

### Direction visuelle

Révision inspirée de la composition d’america.gov (consulté le 31 octobre 2026) : titres Georgia à empattements, espace plus généreux, séparateurs fins, boutons bleus arrondis. Fond OLED conservé et couleurs menthe/corail pour distinguer revenus et dépenses. Vérification visuelle dans l’aperçu mobile ; compilation de production réussie.

### Accueil et dépenses

L’accueil affiche une enveloppe hebdomadaire définie manuellement pour chaque lundi et devise, le montant dépensé et le restant, ainsi que les cinq jours du lundi au vendredi. Le week-end est exclu et les semaines peuvent traverser un mois ou une année. Les plafonds mensuels restent indépendants. Les budgets hebdomadaires sont sauvegardés et exportés avec les autres données ; les anciennes sauvegardes restent compatibles.

L’onglet Dépenses s’ouvre sur le mois courant et présente un anneau des catégories, les montants et leurs proportions dans la devise principale. Le mois affiché peut être changé. La liste ne contient que les dépenses ; le graphique conserve le total du mois même quand la recherche ou le filtre de catégorie est utilisé. Les revenus restent saisissables et consultables dans les opérations de la semaine sur l’accueil.

### Mode démo

Le bouton « Essayer la démo » charge des données fictives dans un espace distinct (`mon-budget-demo-data`) et mémorise le mode dans la session. « Quitter la démo » retrouve les données personnelles sans les remplacer. Exemple : enveloppe hebdomadaire de 200 €, dépenses réparties sur cinq jours, sept catégories et plafonds mensuels, salaire. Les modifications de la démo restent dans son espace séparé.

### Catégories avec emojis

20 catégories pratiques inspirées des grandes fonctions COICOP de l’Insee, adaptées à la saisie quotidienne (ce n’est pas un classement statistique des 20 dépenses les plus fréquentes). Alimentation, restaurants, cafés et snacks, logement, énergie et eau, transport, voiture et carburant, santé, assurances, téléphone et internet, abonnements, vêtements, maison et équipement, hygiène et beauté, loisirs, sport, vacances et voyages, éducation et enfants, animaux, autres. Les identifiants des sept catégories historiques sont conservés ; les emojis sont uniquement des libellés d’affichage.

Source : https://www.insee.fr/fr/statistiques/8574673 (Consommation des ménages par fonction, COICOP).

## Périmètre actuel

La fonctionnalité Tickets a été retirée : aucun onglet, OCR, traduction ou appel à une API externe. La clé OpenAI et la configuration du modèle ont été retirées du fichier local. Les dépenses se saisissent via le formulaire habituel. Les documents initiaux sont conservés comme historique du cahier des charges.
