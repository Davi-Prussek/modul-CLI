# Arquitetura de um projeto feito com o create modul

```JavaScript
modul-projet/
│
├──> public/
│
├──> src/
│    │
│    ├──> assets/
│    │    │
│    │    ├──> images/
│    │    ├──> icons/
│    │    ├──> fonts/
│    │    └──> styles/
│    │
│    ├──> components/
│    │    │
│    │    ├──> ui/
│    │    │    │
│    │    │    └──> index.js  //Ou .ts caso TypeScript seja selecionado
│    │    │
│    │    ├──> layout/
│    │    │    │
│    │    │    └──> index.js  //Ou .ts caso TypeScript seja selecionado
│    │    │
│    │    ├──> navigation/
│    │    │    │
│    │    │    └──> index.js  //Ou .ts caso TypeScript seja selecionado
│    │    │
│    │    ├──> feedback/
│    │    │    │
│    │    │    └──> index.js  //Ou .ts caso TypeScript seja selecionado
│    │    │
│    │    ├──> forms/
│    │    │    │
│    │    │    └──> index.js  //Ou .ts caso TypeScript seja selecionado
│    │    │
│    │    ├──> data-display/
│    │    │    │
│    │    │    └──> index.js  //Ou .ts caso TypeScript seja selecionado
│    │    │
│    │    ├──> charts/ Somente se o chart.js for selecionado 
│    │    │    │
│    │    │    └──> index.js  //Ou .ts caso TypeScript seja selecionado
│    │    │
│    │    └──> index.js  //Ou .ts caso TypeScript seja selecionado
│    │
│    ├──> views/
│    │    │
│    │    └──> index.js  //Ou .ts caso TypeScript seja selecionado
│    │
│    ├──> composables/
│    │    │
│    │    └──> index.js  //Ou .ts caso TypeScript seja selecionado
│    │
│    ├──> utils/
│    │    │
│    │    └──> index.js  //Ou .ts caso TypeScript seja selecionado
│    │
│    ├──> constants/
│    │    │
│    │    └──> index.js  //Ou .ts caso TypeScript seja selecionado
│    │
│    ├──> typescript/ Somente se o TypeScript for selecionado
│    │    │
│    │    ├──> generics/
│    │    │    │
│    │    │    └──> index.ts
│    │    │
│    │    ├──> utility-Types/
│    │    │    │
│    │    │    └──> index.ts
│    │    │
│    │    ├──> class/
│    │    │    │
│    │    │    └──> index.ts
│    │    │
│    │    ├──> type-Guards/
│    │    │    │
│    │    │    └──> index.ts
│    │    │
│    │    └──> index.ts
│    │
│    ├──> plugins/ Somente se algum plugin for selecionado
│    │    │
│    │    └──> index.js  //Ou .ts caso TypeScript seja selecionado
│    │
│    ├──> router/ Somente se o router for selecionado
│    │    │
│    │    └──> index.js  //Ou .ts caso TypeScript seja selecionado
│    │
│    ├──> stores/ Somente se o pinia for selecionado
│    │    │
│    │    └──> index.js  //Ou .ts caso TypeScript seja selecionado
│    │
│    ├──> services/ Somente se o axios for selecionado
│    │    │
│    │    └──> index.js  //Ou .ts caso TypeScript seja selecionado
│    │
│    ├──> App.vue
│    └──> main.js  //Ou ts caso TypeScript seja selecionado
│
├──> .gitignore
├──> README.md
├──> env.d.ts.js  //Somente se o TypeScript seja selecionado
├──> eslint.config.js  //Somente se o eslint seja selecionado, Ou .ts caso TypeScript seja selecionado
├──> index.html
├──> package-lock.json
└──> package.json
```
