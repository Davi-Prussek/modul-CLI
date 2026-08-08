//Essa é a versão atualizada e mais rápida do projeto
import { spinner } from "@clack/prompts";
import type { ConfigType } from "../../types/ConfigType.js";
import fs from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { execa } from "execa";
import gradient from "gradient-string";
import { ALL, promises } from "node:dns";
const spin = spinner()
export async function projectExecutor(config: ConfigType) {
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
    "dist",
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
    "dist",
    "templates",
    "config",
    config.use_typeScript ? "TS" : "JS",
  );

  const featuresPath = path.join(
    __dirname,
    "..",
    "..",
    "..",
    "dist",
    "templates",
    "features",
  );
  await fs.cp(configPath, destination, {
    recursive: true,
  });
  await fs.copyFile(
    path.join(configPath, ".." ,"main.js"),
    path.join(destination, "src", "main.js"),
  );
  await fs.copyFile(
    path.join(configPath,"ignore.hbs"),
    path.join(destination, "ignore.hbs"),
  )
  await fs.rename(project+"/ignore.hbs", project+"/.gitignore");

  //Renomeia os arquivos copiados do template selecionado para funcionarem corretamente
  if (config.use_typeScript) {
await Promise.all([
  fs.rename(`${project}/package.hbs`,`${project}/package.json`),
  fs.rename(`${project}/tsconfig.app.hbs`,`${project}/tsconfig.app.json`),
  fs.rename(`${project}/tsconfig.hbs`,`${project}/tsconfig.json`),
  fs.rename(`${project}/tsconfig.node.hbs`,`${project}/tsconfig.node.json`),
  fs.rename(`${project}/vite.config.hbs`,`${project}/vite.config.ts`),
  fs.rename(`${project}/env.d.hbs`,`${project}/env.d.ts`),
  fs.rename(`${project}/src/main.js`,`${project}/src/main.ts`),
  fs.rename(`${project}/src/components/data-display/index.js`,`${project}/src/components/data-display/index.ts`),
  fs.rename(`${project}/src/components/feedback/index.js`,`${project}/src/components/feedback/index.ts`),
  fs.rename(`${project}/src/components/forms/index.js`,`${project}/src/components/forms/index.ts`),
  fs.rename(`${project}/src/components/layout/index.js`,`${project}/src/components/layout/index.ts`),
  fs.rename(`${project}/src/components/navigation/index.js`,`${project}/src/components/navigation/index.ts`),
  fs.rename(`${project}/src/components/index.js`,`${project}/src/components/index.ts`),
  fs.rename(`${project}/src/composables/index.js`,`${project}/src/composables/index.ts`),
  fs.rename(`${project}/src/constants/index.js`,`${project}/src/constants/index.ts`),
  fs.rename(`${project}/src/typescript/index.js`,`${project}/src/typescript/index.ts`),
  fs.rename(`${project}/src/typescript/classes/index.js`,`${project}/src/typescript/classes/index.ts`),
  fs.rename(`${project}/src/typescript/generics/index.js`,`${project}/src/typescript/generics/index.ts`),
  fs.rename(`${project}/src/typescript/interfaces/index.js`,`${project}/src/typescript/interfaces/index.ts`),
  fs.rename(`${project}/src/typescript/types/index.js`,`${project}/src/typescript/types/index.ts`),
  fs.rename(`${project}/src/typescript/types/guards/index.js`,`${project}/src/typescript/types/guards/index.ts`),
  fs.rename(`${project}/src/typescript/types/utility/index.js`,`${project}/src/typescript/types/utility/index.ts`),
  fs.rename(`${project}/src/utils/index.js`,`${project}/src/utils/index.ts`),
  fs.rename(`${project}/src/views/index.js`,`${project}/src/views/index.ts`),
])

  } else {
    await fs.rename(project + "/package.hbs", project + "/package.json");
    await fs.rename(project + "/vite.config.hbs", project + "/vite.config.json");
  }
  //Isso aqui simplesmente pega o JSON e o transforma em um OBJETO, muito incrível kkkkk
  const pacote = JSON.parse(
    await fs.readFile(project + "/package.json", "utf8"),
  );
  pacote.name = project;
  if (config.piniaPersistPlugin) {config.features.push("pinia-plugin-persistedstate")};
  for (const item of config.features) {
    switch (item) {
      case "router":
        pacote.dependencies["vue-router"] = "^5.2.0";
        await fs.cp(
          path.join(featuresPath, 'router'),
          path.join(destination, 'src','router'),
          {recursive: true}
        );
        if (config.use_typeScript) {
          await fs.rename(
            `${destination}/src/router/index.js`,
            `${destination}/src/router/index.ts`,
          )
        }
        break;
      case "pinia":
        pacote.dependencies["pinia"] = "^4.0.2";
        await fs.cp(
          path.join(featuresPath, 'stores'),
          path.join(destination, 'src','stores'),
          {recursive: true}
        );
        if (config.use_typeScript) {
          await fs.rename(
            `${destination}/src/stores/exemplo.js`,
            `${destination}/src/stores/exemplo.ts`,
          )
        }
        break;
      case "eslint":
        pacote.scripts["lint"] = 'run-s "lint:*"';
        pacote.scripts["lint:oxlint"] = "oxlint . --fix";
        pacote.scripts["lint:eslint"] = "eslint . --fix --cache";
        pacote.devDependencies["vue-eslint-parser"] = "^10.4.1";
        pacote.devDependencies["eslint"] = "^10.7.0";
        pacote.devDependencies["eslint-plugin-oxlint"] = "~1.73.0";
        pacote.devDependencies["eslint-plugin-vue"] = "~10.9.2";
        break;
      case "prettier":
        pacote.devDependencies["prettier"] = "3.9.5";
        pacote.scripts["format"] = "prettier --write --experimental-cli src/";
        break;
      case "vitest":
        pacote.scripts["test:unit"] = "vitest";
        pacote.devDependencies["jsdom"] = "^29.1.1";
        pacote.devDependencies["@types/jsdom"] = "^28.0.3";
        pacote.devDependencies["npm-run-all2"] = "^9.0.2";
        break;
      case "playwright":
        pacote.dependencies["playwright"] = "^1.62.1";
        break;
      case "axios":
        pacote.dependencies["axios"] = "^1.19.0";
        await fs.cp(
          path.join(featuresPath, 'services'),
          path.join(destination, 'src','services'),
          {recursive: true}
        );
        if (config.use_typeScript) {
          await fs.rename(
            `${destination}/src/services/api.js`,
            `${destination}/src/services/api.ts`,
          )
        }
        break;
      case "@vueuse/core":
        pacote.dependencies["@vueuse/core"] = "^14.4.0";
        break;
      case "dayjs":
        pacote.dependencies["dayjs"] = "^1.11.21";
        break;
      case "zod":
        pacote.dependencies["zod"] = "^4.4.3";
        await fs.cp(
          path.join(featuresPath, 'schemas'),
          path.join(destination, 'src','schemas'),
          {recursive: true}
        );
        if (config.use_typeScript) {
          await fs.rename(
            `${destination}/src/schemas/index.js`,
            `${destination}/src/schemas/index.ts`,
          )
        }
        break;
      case "vuetify":
        if (config.features.includes("vuetify")) {
          config.vuetify == "vuetify"
            ? (pacote.dependencies["vuetify"] = "^4.1.7")
            : (pacote.dependencies["@vuetify/v0"] = "^1.0.2");
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
      case "pinia-plugin-persistedstate":
        pacote.dependencies["pinia-plugin-persistedstate"] = "^4.2.0";
        break;
    }
  }
  await fs.writeFile(
    path.join(project, "package.json"),
    JSON.stringify(pacote, null, 2),
  );
  if (inicialize) {
    await execa("git", ["init"], { cwd: destination });
    if (config.gitConfig?.includes("readme")) {
      await fs.copyFile(
        path.join(configPath, "..","README.md"),
        path.join(destination, "README.md"),
      );
    }
    if (config.gitConfig?.includes("branch")) {
      await execa("git", ["switch", "-C", "dev"], { cwd: destination });
    }
  }
spin.start(
  "Instalando as dependências, pode demorar um pouco dependendo de quantidade selecionada..."
);
await execa("npm", ["install"], { cwd: destination });
spin.stop(
  gradient([
    "#4C1D95",
    "#7C3AED",
    "#A855F7",
  ])("Aplicação criada, configurada e instalada com sucesso!")
);
}
