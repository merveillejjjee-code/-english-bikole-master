# English BIKOLE Master

Application d'apprentissage de l'anglais pour francophones — Niveau 1
(8 chapitres), avec comptes utilisateurs, rôle administrateur, audio,
exercices, révision espacée et tuteur IA optionnel.

Stack : **Next.js** (Pages Router) + **PostgreSQL** (via Prisma) +
**NextAuth** (comptes email / mot de passe). Prêt pour un déploiement
sur **Vercel**.

---

## 1. Créer une base de données PostgreSQL

Vercel n'inclut pas de base de données par défaut — il en faut une
externe (gratuite pour démarrer) :

Depuis votre tableau de bord Vercel → onglet **Storage** → **Create
Database** → choisissez **Postgres** (propulsé par Neon). Une fois
créée, Vercel propose de la **connecter à un projet** : vous pourrez
le faire à l'étape 3 (elle remplit alors `DATABASE_URL`
automatiquement — vous n'avez rien à copier vous-même).

## 2. Mettre le code sur GitHub (sans terminal)

1. Sur [github.com](https://github.com), cliquez **New repository**,
   donnez-lui un nom (ex. `english-bikole-master`), laissez-le
   **vide** (ne cochez pas "Add a README"), puis **Create repository**.
2. Décompressez le fichier `english-bikole-master.zip` sur votre
   ordinateur.
3. Sur la page de votre nouveau dépôt GitHub, cliquez **uploading an
   existing file** (ou **Add file → Upload files**).
4. Glissez-déposez **tout le contenu** du dossier décompressé
   (fichiers et sous-dossiers `pages`, `lib`, `prisma`, `public`,
   `styles`, etc. — pas le dossier lui-même, son contenu) dans la
   zone d'upload, puis **Commit changes**.

*(Si vous êtes à l'aise avec Git, la méthode classique fonctionne
aussi : `git init`, `git add .`, `git commit`, `git push`.)*

## 3. Importer le projet dans Vercel

1. Sur [vercel.com](https://vercel.com) → **Add New → Project** →
   sélectionnez le dépôt GitHub que vous venez de créer.
2. Vercel détecte Next.js automatiquement, rien à changer dans les
   réglages de build.
3. Dans **Environment Variables**, ajoutez (voir aussi `.env.example`) :

   | Variable | Valeur |
   |---|---|
   | `DATABASE_URL` | l'URL Postgres de l'étape 1 (auto-remplie si vous avez connecté la base Vercel) |
   | `NEXTAUTH_SECRET` | une chaîne aléatoire — n'importe quelle phrase longue et unique suffit |
   | `NEXTAUTH_URL` | l'URL finale de votre app, ex. `https://english-bikole-master.vercel.app` |
   | `ANTHROPIC_API_KEY` | *(optionnel)* votre clé API Anthropic, pour activer le tuteur IA |

4. Cliquez sur **Deploy**.

Les tables de la base de données sont créées **automatiquement**
pendant ce déploiement (la commande `prisma db push` est intégrée au
build) — aucune commande à lancer vous-même.

## 4. Créer le compte administrateur

**Le tout premier compte créé via la page `/register` de votre site
déployé devient automatiquement administrateur.** Allez sur votre
URL Vercel, créez un compte — c'est fait, aucune manipulation
supplémentaire.

Un administrateur peut ensuite promouvoir ou rétrograder d'autres
comptes depuis le panneau **Administration** (`/admin`) une fois
connecté.

*(Alternative en ligne de commande, si vous préférez forcer un
administrateur précis :* `ADMIN_EMAIL="vous@exemple.com"
ADMIN_PASSWORD="motdepasse-sûr" DATABASE_URL="votre-url-postgres" npm
run seed` *)*

## 5. Tester en local (optionnel)

```bash
npm install
cp .env.example .env.local   # puis renseignez les valeurs
npx prisma db push
npm run dev
```

L'application est disponible sur http://localhost:3000

---

## Ce que couvre cette version

- Inscription / connexion réelles (mot de passe haché avec bcrypt),
  sessions sécurisées (NextAuth, JWT).
- Rôles **USER** / **ADMIN** ; panneau d'administration pour lister,
  promouvoir, rétrograder ou supprimer des comptes.
- Progression sauvegardée par utilisateur en base de données
  (chapitres terminés, XP, série de jours, vocabulaire en révision
  espacée).
- 8 chapitres du Niveau 1 (Alphabet, Prononciation, Salutations, Se
  présenter, Nombres, Couleurs, Famille, Maison) avec audio (voix du
  navigateur), grammaire, exercices variés et correction pédagogique.
- Tuteur IA (optionnel) : si `ANTHROPIC_API_KEY` est configurée,
  chaque correction propose une explication personnalisée et un chat
  libre est disponible dans l'onglet *Tuteur IA*. Sans clé, l'app
  fonctionne normalement, seul le tuteur IA affiche un message
  indiquant qu'il n'est pas configuré.

## Prochaines étapes possibles

- Les 12 chapitres restants du Niveau 1 (Nourriture → Vie
  quotidienne) et l'examen de fin de niveau avec certificat.
- Niveaux 2, 3 et Expert.
- Mode Conversation avec l'IA (situations : aéroport, restaurant,
  entretien d'embauche...).
- Export CSV des statistiques depuis le panneau admin.

## Structure du projet

```
pages/
  index.js            page d'accueil
  login.js, register.js
  dashboard.js         monte le moteur pédagogique (public/app.js)
  admin/index.js        panneau d'administration
  api/
    auth/[...nextauth].js
    register.js
    progress.js          lecture/sauvegarde de la progression
    tutor.js              appel serveur à l'API Anthropic
    admin/users.js        gestion des comptes (admin uniquement)
lib/
  prisma.js, auth.js
prisma/
  schema.prisma          modèle User (email, rôle, progression JSON)
  seed.js                 création d'un admin en CLI (optionnel)
public/
  app.js                  moteur pédagogique (vocabulaire, exercices,
                           audio, révision espacée, tuteur IA)
styles/globals.css
```
