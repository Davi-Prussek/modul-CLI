# Modul_CLI

## Description

Modul CLI is a package of custom commands for Vue.js that automates repetitive tasks, standardizes project structure, and accelerates development. In addition to creating configurable projects, the CLI provides commands to generate and organize views, components, sections, and other resources, maintaining a consistent and scalable architecture.

## Summary

- [Core](#core)
- [Installation](#installation)
- [View Manipulation commands](#view-manipulation-commands)
- [Section Manipulation commands](#section-manipulation-commands)
- [Component Manipulation commands](#component-manipulation-commands)

## Features

During project creation, you can choose which technologies to include:

### Core

- TypeScript
- Vue Router
- Pinia
- Tailwind CSS
- Vuetify
- Axios
- VueUse
- Day.js
- Zod
- Vue I18n
- Pinia Plugin Persisted State
- Dotenv (.env support)
- Font Awesome
- Flaticon UIcons
- Vue DevTools
- ESLint
- Prettier
- Vitest
- End-to-End Testing
- More resources will come as the need arises.

## Installation

### npm init modul@latest

This command would be the custom launcher, where it would ask:

```markdown
- Project name
- Framework
- Use TypeScript
- Features
- CSS framework
```

And it creates the personalized environment needed to execute all the commands with prefix `modul`.

After that, it automatically runs `npm install`.

Finally, he would create the folder structure like this:

```markdown

.
├── public/
│
├── src/
│   ├── assets/
│   │   └── index.ts
│   │
│   ├── components/
│   │   └── index.ts
│   │
│   ├── composables/
│   │   └── index.ts
│   │
│   ├── constants/
│   │   └── index.ts
│   │
│   ├── plugins/
│   │   └── index.ts
│   │
│   ├── router/
│   │   └── index.ts
│   │
│   ├── services/
│   │   └── index.ts
│   │
│   ├── stores/
│   │   └── index.ts
│   │
│   ├── types/
│   │   └── index.ts
│   │
│   ├── utils/
│   │   └── index.ts
│   │
│   ├── views/
│   │
│   ├── App.vue
│   ├── main.ts
│   ├── env.d.ts
│   └── vite-env.d.ts
│
├── .gitignore
├── eslint.config.js
├── index.html
├── package.json
├── package-lock.json
├── tsconfig.app.json
├── tsconfig.json
├── tsconfig.node.json
├── vite.config.ts
└── README.md
```

## View Manipulation commands

The module provides commands for the faster and more organized creation of components, views, or view sections, featuring cleaner exports and the option to define responsiveness configurations at the time of component creation.

---

### modul create view "View-Name"

This command would prompt for the view name and generate a structure like this:

```markdown
views/
└── ViewName/
    ├── ViewName.vue
    └── index.ts
```

After the system will ask if you want to add the view in router-vue.

---

### modul create view-page "View-Name"

This command would prompt for the view name and generate a structure like this:

```markdown
views/
└── ViewName/
    ├── ViewNameDesktop.vue
    ├── ViewNameMobile.vue
    ├── ViewName.vue
    └── index.ts
```

After the system will ask if you want to add the view in router-vue.

---

### modul create view-section "View-Name"

This command would prompt for the view name and generate a structure like this:

```markdown
views/
└── ViewName/
    ├── sections/
    ├── ViewName.vue
    └── index.ts
```

After the system will ask if you want to add the view in router-vue.

---

## Section Manipulation commands

### modul create section "Section-Name"

This command would prompt for the Section name, analyze the application's folder structure, and look for a `views` folder; if there were only a single view, it would finish there, generating a structure like this:

```markdown
NomeDaSection/
  ├── NomeDaSection.vue
  └── index.ts
```

If the `views` folder contains more than one `view-folder`, the system will ask which view you want to add a section to before executing the command.

And if the selected `view` doesn't have a section folder, it will create.

---

### modul create section-responsive "Section-Name"

This command would prompt for the Section name, analyze the application's folder structure, and look for a `views` folder; if there were only a single view, it would finish there, generating a structure like this:

```markdown
NomeDaSection/
  ├── NomeDaSectionDesktop.vue
  ├── NomeDaSectionMobile.vue
  ├── NomeDaSection.vue
  └── index.ts
```

If the `views` folder contains more than one `view-folder`, the system will ask which view you want to add a section to before executing the command.

And if the selected `view` doesn't have a section folder, it will create.

---

## Component Manipulation commands

### modul create component "Component-Name"

This command would prompt for the Component name, ask which type of component you wanna create, if he will be a:

- ui
- forms
- layout
- navigation
- feedback
- data-display
- charts
- icons
- shared
- features

If the selected folder does not exist, it will create it before executing the creation command.

And if the `components` folder does not exist either, it will create it.
