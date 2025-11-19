L’examen AZ‑104 et comment s’y préparer, y compris les TP et les révisions :

---

## AZ‑104 – Microsoft Azure Administrator

### **À quoi ressemble l’examen**

* **Durée** : 180 minutes (3 heures)
* **Nombre de questions** : environ 40 à 60
* **Type de questions** :

  * QCM simple ou multiple
  * Drag-and-drop / associer des éléments
  * Études de cas / scénarios
  * Labs pratiques (performance-based questions) : réaliser des tâches directement sur un environnement Azure simulé

---

### **Sujets abordés**

L’examen couvre les principaux domaines d’administration Azure :

| Domaine                                   | Exemples de tâches                                                                      |
| ----------------------------------------- | --------------------------------------------------------------------------------------- |
| **Gestion des abonnements et ressources** | Déployer Resource Groups, gérer les rôles RBAC, appliquer des policies                  |
| **Gestion du stockage**                   | Créer et configurer des comptes de stockage, gérer la réplication                       |
| **Gestion des machines virtuelles**       | Déployer, configurer et mettre à jour des VM                                            |
| **Gestion des réseaux virtuels**          | Créer VNets, sous-réseaux, NSG, VPN et peering                                          |
| **Gestion des identités et accès**        | Gérer Azure AD, utilisateurs, groupes, MFA, rôles RBAC                                  |
| **Surveillance et sauvegarde**            | Configurer alertes, dashboards, sauvegarder des ressources, diagnostiquer des problèmes |

---

### **Travaux pratiques (TP) / Labs**

* **Nombre conseillé pour la préparation** : 10 à 15 labs
* **Durée totale** : environ 15–25 heures
* **Exemples de TP à faire** :

  * Créer et gérer des Resource Groups
  * Déployer et configurer des VM
  * Configurer des comptes de stockage et la réplication
  * Configurer des réseaux virtuels, NSG et peering
  * Gérer les utilisateurs et groupes Azure AD
  * Attribuer des rôles RBAC
  * Configurer la surveillance et la sauvegarde

---

### **Où s’entraîner**

* **GitHub officiel Microsoft AZ‑104 Labs** (gratuit) : [https://microsoftlearning.github.io/AZ-104-MicrosoftAzureAdministrator/](https://microsoftlearning.github.io/AZ-104-MicrosoftAzureAdministrator/)
* **Microsoft Learn** : modules interactifs avec sandbox Azure
* **Plateformes payantes (optionnel)** :

  * KodeKloud
  * Whizlabs
* **YouTube / tutoriels gratuits** : chercher “AZ‑104 hands-on lab” pour des démonstrations pas-à-pas

---

### **Conseils**

* Pratiquer **sur un vrai portail Azure** ou sandbox pour les labs.
* Réviser chaque domaine en faisant des scénarios complets (ex : créer un réseau complet avec VM, NSG et RBAC).
* La pratique est essentielle : **connaître la théorie ne suffit pas pour les labs pratiques**.

---


# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...

      // Remove tseslint.configs.recommended and replace with this
      tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      tseslint.configs.stylisticTypeChecked,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```
