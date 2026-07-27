import { execa } from "execa";
import { spinner } from "@clack/prompts";
import type { ConfigType } from "../types/ConfigType.js";
import { cwd, stdin } from "node:process";
import path from "node:path";

export async function initExecutor(config: ConfigType) {

  //Só pra ficar mais limpo
  const projectName = config.ProjectName;

  //Tô com preguiça de fazer
  const css_framework = config.css_framework;

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
      dependencias.push(...feature.split(" ").slice(1));
    } else {
      createVueArgs.push("--" + feature);
    }
  }

  //Cria o projeto
  await execa(
    "npm",
    [
      "create",
      "vue@latest",
      projectName,
      "--",
      //Nota mental: o ... serve pra tirar os elementos do array menor e jogar pro maior
      ...commandTS,
      ...createVueArgs],
    { stdio: "inherit" })
  //Configurar o caminho que a pasta vai ser criada
  const currentPath = path.resolve(projectName);
  //Verifica se o eslint foi instalado, caso seja, ele instala o oxlint@~1.73.0 pra não dar erro.
  if (createVueArgs.includes("--eslint")) {await 
    execa("npm", ["install", "-D", "oxlint@~1.73.0"], {
      cwd: currentPath,
    });
  }
  if (use_typeScript) {await 
    execa("npm", ["install", "-D", "@vue/tsconfig"], {
      cwd: currentPath})}
  try {
    //Instala as outras dependências se tiver alguma selecionada
    if (dependencias.length) {
      await execa("npm", ["install", ...dependencias], {
        cwd: currentPath,
        stdio: "inherit",
      });
    }
    console.log("Application successfully created and configured!");
    //Bota a aplicação pra rodar de forma automática caso ocorra tudo bem
    await execa("npm", ["run", "dev"], { cwd: currentPath, stdio: "inherit" });
  } catch {
    console.log("Error during application creation or configuration!");
  }
}
