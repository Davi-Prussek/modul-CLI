# Modul_CLI

## Description

O Modul CLI é uma CLI para Vue.js com uma abordagem opinativa que automatiza tarefas repetitivas, padroniza a estrutura do projeto e acelera a criação e o desenvolvimento. Além de configurar a estrutura inicial do projeto, ele oferece comandos inteligentes para gerar e organizar views, componentes, seções e outros recursos, mantendo uma arquitetura limpa, consistente e escalável.

## Sumário

- [Core](#core)
- [Instalação](#instalação)
- [Comandos das Views](#view-Commands)
- [Comandos das Sections](#section-commands)
- [Comandos dos Componentes](#component-commands)

## Features

Durante a criação do projeto, você pode escolher quais tecnologias e ferramentas devem ser incluídas em sua aplicação.

## Core

- TypeScript
- Router Vue
- Pinia
- Tailwind CSS
- Vuetify
- Axios
- VueUse
- Day.js
- Zod
- Vue I18n
- Pinia Plugin Persisted State
- Font Awesome
- Flaticon UIcons
- Vue DevTools
- ESLint
- Prettier
- Vitest
- End-to-End Testing
- More integrations will be added over time.

## Instalação

### npm init modul@latest

Este comando é o inicializador personalizado, que perguntará:

```markdown
- Project name
- Framework
- Use TypeScript
- Features
- CSS framework
```
E isso cria o ambiente personalizado necessário para executar todos os comandos com o prefixo `modul`.

Depois disso, ele executa automaticamente o `npm install`.

Por fim, a CLI cria a seguinte estrutura de projeto:

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

## Commands

A CLI disponibiliza comandos para a criação mais rápida e organizada de componentes, views ou seções de view, oferecendo exportações mais limpas e a opção de definir configurações de responsividade no momento da criação do componente.

---

### View commands

---

#### View Summary

- [modul create view](#modul-create-view-view-name)
- [modul create view-page](#modul-create-view-page-view-name)
- [modul create view-section](#modul-create-view-section-view-name)

---

#### modul create view "View-Name"

This command would prompt for the view name and generate a structure like this:

```markdown
views/
└── ViewName/
    ├── ViewName.vue
    └── index.ts
```

After the system will ask if you want to add the view in router-vue.

---

#### modul create view-page "View-Name"

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

#### modul create view-section "View-Name"

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

### Section commands

---

#### Section Summary

- [modul create section](#modul-create-section-section-name)
- [modul create section-responsive](#modul-create-section-responsive-section-name)

---

#### modul create section "Section-Name"

This command would prompt for the Section name, analyze the application's folder structure, and look for a `views` folder; if there were only a single view, it would finish there, generating a structure like this:

```markdown
NomeDaSection/
  ├── NomeDaSection.vue
  └── index.ts
```

If the `views` folder contains more than one `view-folder`, the system will ask which view you want to add a section to before executing the command.

And if the selected `view` doesn't have a section folder, it will create.

---

#### modul create section-responsive "Section-Name"

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

### Component commands

#### modul create component "Component-Name"

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
