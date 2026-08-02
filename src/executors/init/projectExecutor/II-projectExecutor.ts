//Essa é a versão atualizada e mais rápida do projeto

import type { ConfigType } from "../../../types/ConfigType.js";
import fs from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { execa } from "execa";
export async function projectExecutorII(config: ConfigType) {

  
  //Pegar o nome do projeto dito pelo usuário
  const project = config.ProjectName;



  //Pegar a decisão de iniciar um repositório no git ou não
  const inicialize = config.repository;
  //Pegar as ações de git do projeto
  const gitActions = config.gitConfig;
  


  //Transforma a URL do arquivo em um caminho
  const __filename = fileURLToPath(import.meta.url);
  //Devolve a pasta onde esse arquivo está
  const __dirname = path.dirname(__filename);
  //Sai da pasta projectExecutor com .., sai da pasta init com .., sai da pasta executors com .., depois ele entra na pasta templates, depois entra na pasta base, depois entra na pasta TS ou JS.
  const basePath = path.join(
    __dirname,
    "..",
    "..",
    "..",
    "templates",
    "base",
    config.use_typeScript ? "TS" : "JS",
  );
  //Aqui ele só encontra o caminho da pasta criada e guarda na const destination
  const destination = path.resolve(project);
  //Aqui ele copia a pasta TS ou JS pro arquivo criado
  await fs.cp(basePath, destination, {
    recursive: true,
  });



  //Aqui ele pega o caminho das configs averiguando se o TS ou o JS foi selecionado pra saber qual usar.
  const configPath = path.join(
    __dirname,
    "..",
    "..",
    "..",
    "templates",
    "config",
    config.use_typeScript ? "TS" : "JS",
  );
  await fs.cp(configPath, destination, {
    recursive: true,
  });


  //Renomeia os arquivos copiados do template selecionado para funcionarem corretamente
  if (config.use_typeScript) {
    fs.rename(project + "/package.hbs", project + "/package.json");
    fs.rename(project + "/tsconfig.app.hbs", project + "/tsconfig.app.json");
    fs.rename(project + "/tsconfig.hbs", project + "/tsconfig.json");
    fs.rename(project + "/tsconfig.node.hbs", project + "/tsconfig.node.json");
    fs.rename(project + "/vite.config.hbs", project + "/vite.config.ts");
  } else {
    fs.rename(project + "/package.hbs", project + "/package.json");
    fs.rename(project + "/vite.config.hbs", project + "/vite.config.json");
  }
  //Isso aqui simplesmente pega o JSON e o transforma em um OBJETO, muito incrível kkkkk
  const pacote = JSON.parse(await fs.readFile(project+"/package.json", "utf8"));
  pacote.name = project;
  pacote.dependencies ??= {};
  pacote.devDependencies ??= {};
  pacote.scripts ??= {};
  for (const item of config.features) {
    switch (item) {
      case "router":
      pacote.dependencies["vue-router"] = "^5.2.0";
      break;
      case "pinia":
      pacote.dependencies["pinia"] = "^4.0.2";
      break;
      case "eslint":
      pacote.scripts["lint"] = "run-s \"lint:*\"";
      pacote.scripts["lint:oxlint"] = "oxlint . --fix";
      pacote.scripts["lint:eslint"] = "eslint . --fix --cache";
      pacote.devDependencies["vue-eslint-parser"] = "^10.4.1";
      pacote.devDependencies["eslint"] = "^10.7.0";
      pacote.devDependencies["eslint-plugin-oxlint"] = "~1.73.0";
      pacote.devDependencies["eslint-plugin-vue"] = "~10.9.2";
      break;
      case "prettier":
      pacote.devDependencies["prettier"] = "3.9.5";
      break;
      case "vitest":
      pacote.devDependencies["jsdom"] = "^29.1.1";
      pacote.devDependencies["@types/jsdom"] = "^28.0.3";
      pacote.devDependencies["npm-run-all2"] = "^9.0.2";
      break;
      case "playwright":
      pacote.dependencies["playwright"] = "^1.62.1";
      break;
      case "axios":
      pacote.dependencies["axios"] = "^1.19.0";
      break;
      case "@vueuse/core":
      pacote.dependencies["@vueuse/core"] = "^14.4.0";
      break;
      case "dayjs":
      pacote.dependencies["dayjs"] = "^1.11.21";
      break;
      case "zod":
      pacote.dependencies["zod"] = "^4.4.3"
      break;
      case "vuetify":
      if (config.features.includes("vuetify")) {
        config.vuetify == "vuetify" ? pacote.dependencies["vuetify"] = "^4.1.7" : pacote.dependencies["@vuetify/v0"] = "^1.0.2"; 
      }
      break;
      case "@fortawesome":
      pacote.dependencies["@fortawesome/fontawesome-svg-core"] = "^7.3.1";
      pacote.dependencies["@fortawesome/free-brands-svg-icons"] = "^7.3.1";
      pacote.dependencies["@fortawesome/free-solid-svg-icons"] = "^7.3.1";
      pacote.dependencies["@fortawesome/vue-fontawesome"] = "^3.3.3";
      break;
      case "@flaticon/flaticon-uicons":
      pacote.dependencies["@flaticon/flaticon-uicons"] = "^3.3.1";
      break;
      case "@lucide/vue":
      pacote.dependencies["@lucide/vue"] = "^1.28.0";
      break;
      case "devicon":
      pacote.dependencies["devicon"] = "^2.17.0";
      break;
      case "@mdi/font":
      pacote.dependencies["@mdi/font"] = "^7.4.47";
      break;
      case "tailwindcss":
      pacote.dependencies["tailwindcss"] = "^4.3.3";
      pacote.dependencies["@tailwindcss/vite"] = "^4.3.3";
      break;
      case "bootstrap":
      pacote.dependencies["bootstrap"] = "^5.3.8";
      break;
    }
  }
  await fs.writeFile(
  path.join(project, "package.json"),
  JSON.stringify(pacote, null, 2)
);
//Fim da função
}
