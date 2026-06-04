# NexStore 🏪
**Système de gestion de magasin** — Utilisateurs · Produits · Ventes

---

## 📁 Structure des fichiers

```
nexstore/
├── index.html          ← Page de connexion
├── register.html       ← Page d'inscription
├── dashboard.html      ← Tableau de bord
├── users.html          ← Gestion utilisateurs (live update)
├── products.html       ← Gestion produits
├── sales.html          ← Gestion ventes
└── assets/
    ├── css/
    │   └── style.css
    └── js/
        └── data.js     ← Base de données (localStorage)
```

---

## 🚀 Déploiement

### Option 1 — GitHub Pages (GRATUIT, recommandé)

1. Créez un compte sur https://github.com
2. Créez un nouveau repository public : `nexstore`
3. Uploadez tous les fichiers (drag & drop dans l'interface web)
4. Allez dans **Settings → Pages**
5. Source : `Deploy from a branch` → branche `main` → dossier `/ (root)`
6. Cliquez **Save** → votre site sera en ligne sur :
   `https://VOTRE_USERNAME.github.io/nexstore`

### Option 2 — Netlify Drop (GRATUIT, le plus rapide)

1. Allez sur https://app.netlify.com/drop
2. **Glissez-déposez** le dossier `nexstore` entier
3. Votre site est en ligne en 30 secondes avec une URL type :
   `https://amazing-site-123.netlify.app`
4. Vous pouvez personnaliser l'URL gratuitement

### Option 3 — InfinityFree (hébergement PHP gratuit)

1. Créez un compte sur https://infinityfree.net
2. Créez un hosting gratuit
3. Allez dans **File Manager → htdocs**
4. Uploadez tous les fichiers
5. Votre site est accessible sur votre domaine InfinityFree

---

## 🔑 Comptes de démonstration

| Rôle          | Email                        | Mot de passe |
|---------------|------------------------------|--------------|
| Admin         | amede.k@nexstore.com         | admin123     |
| Vendeur       | wilfried.d@nexstore.com      | pass123      |
| Gestionnaire  | romuald.a@nexstore.com       | pass123      |

---

## ✨ Fonctionnalités

- **Connexion / Inscription** avec validation
- **Dashboard** : stats, top produits, activité récente
- **Utilisateurs** : CRUD complet + **mise à jour automatique** (détecte les nouvelles inscriptions)
- **Produits** : vue grille/liste, gestion du stock
- **Ventes** : enregistrement, suivi du CA, filtres par statut
- **Données persistantes** via `localStorage` (pas de backend requis)

---

## 🛠️ Git — Commandes rapides

```bash
# Initialiser et publier sur GitHub
git init
git add .
git commit -m "Initial commit — NexStore"
git branch -M main
git remote add origin https://github.com/VOTRE_USERNAME/nexstore.git
git push -u origin main
```
