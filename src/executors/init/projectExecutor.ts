import { execa } from "execa";
import { spinner } from "@clack/prompts";
import type { ConfigType } from "../../types/ConfigType.js";
import { cwd, stdin } from "node:process";
import { vuetifyPrompt } from "../../prompts/init/initOptions/configPrompt/index.js";
import path from "node:path";
import { handleCancel } from "../../utils/cancel.js";
const spin = spinner();

export async function projectExecutor(config: ConfigType) {
  //Só pra ficar mais limpo
  const projectName = config.ProjectName;

  //Tô com preguiça de fazer
  let css_framework: string[] = [];

  //Decidir se tem typescript ou não
  const use_typeScript = config.use_typeScript;
  const commandTS = use_typeScript ? ["--typescript"] : [];

  //Decidir se deve iniciar um repositório git
  const Inicialize_repository = config.Inicialize_repository;

  //Separação das features pra saber se vão ser adicionadas na criação ou vão ter que ser configuradas
  const features = config.features;
  const createVueArgs: string[] = [];
  const dependencias: string[] = [];

  //Grande for of
  for (let feature of features) {
    if (feature.startsWith("install")) {
      if (feature.includes("install vuetify")) {
        dependencias.push(...handleCancel((await vuetifyPrompt()).version))
      }
      dependencias.push(...feature.split(" ").slice(1));
    } else {
      createVueArgs.push("--" + feature);
    }
  }
  if (config.css_framework == "default") { return
  } else {
      css_framework = [config.css_framework]
  }
  dependencias.push(...css_framework.slice(1))
  spin.start("Starting Vue...");
  //Cria o projeto
   await execa("npm", [
    "create",
    "vue@latest",
    projectName,
    "--",
    //Nota mental: o ... serve pra tirar os elementos do array menor e jogar pro maior
    ...commandTS,
    ...createVueArgs,
  ]); 
  spin.message("Default Vue configuration set up...");
  //Configurar o caminho que a pasta vai ser criada
  const currentPath = path.resolve(projectName);
  //Verifica se o eslint foi instalado, caso seja, ele instala o oxlint@~1.73.0 pra não dar erro.
  if (createVueArgs.includes("--eslint")) {
    await execa("npm", ["install", "-D", "oxlint@~1.73.0"], {
      cwd: currentPath,
    });
  }
  if (use_typeScript) {
    await execa("npm", ["install", "-D", "@vue/tsconfig"], {
      cwd: currentPath,
    });
  }
  try {
    spin.message("Instalando as dependencias...");
    //Instala as outras dependências se tiver alguma selecionada
    if (dependencias.length) {
      await execa("npm", ["install", ...dependencias], {
        cwd: currentPath,
        stdio: "inherit",
      });
    }
    if (!Inicialize_repository) {
      //Para o spin se não tiver repo pra adicionar
      spin.stop("Application successfully created and configured!\n");
    }
    else {
      //Continua o spin pra criar o repositório github
    }
  } catch {
    console.log("Error during application creation or configuration!");
  }
}
