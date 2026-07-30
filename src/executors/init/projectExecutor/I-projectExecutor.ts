import { execa } from "execa";
import { spinner } from "@clack/prompts";
import type { ConfigType } from "../../../types/ConfigType.js";
import { cwd, stdin } from "node:process";
import { vuetifyPrompt } from "../../../prompts/init-modul/options/project_structure/questions/vuetifyPrompt.js";
import path from "node:path";
import { handleCancel } from "../../../utils/cancel.js";
const spin = spinner();

export async function projectExecutor(config: ConfigType) {
  //Só pra ficar mais limpo
  const projectName = config.ProjectName;

  //Decidir se tem typescript ou não
  const use_typeScript = config.use_typeScript;

  //Decidir se deve iniciar um repositório git
  const Inicialize_repository = config.Inicialize_repository;

  //Separação das features pra saber se vão ser adicionadas na criação ou vão ter que ser configuradas
  const features = config.features;
  let createVueArgs: string[] = [];
  const dependencias: string[] = [];

  //Grande for of
  for (let feature of features) {
    if (feature.startsWith("install")) {
      if (feature.includes("vuetify")) {
        dependencias.push(handleCancel((await vuetifyPrompt()).version));
      } else {
        dependencias.push(...feature.split(" ").slice(1));
      }
    } else {
      createVueArgs.push("--" + feature);
    }
  }
  if (config.css_framework !== "default") {
    dependencias.push(...config.css_framework.split(" ").slice(1));
  }
  if (use_typeScript) {
    createVueArgs.push("--ts");
  }
  if ("a" == "a") {}
  if (createVueArgs.length == 0) {
    createVueArgs = ["--default"];
  }
  spin.start("Starting Vue...");
  //Cria o projeto
  await execa("npm", [
    "create",
    "vue@latest",
    projectName,
    "--",
    //Nota mental: o ... serve pra tirar os elementos do array menor e jogar pro maior
    ...createVueArgs
  ]);
  //Configurar o caminho que a pasta vai ser criada
  const currentPath = path.resolve(projectName);

  //Verifica se o eslint foi selecionado, caso seja, ele instala o oxlint@~1.73.0 pra não dar erro.
  if (features.includes("--eslint")) {
    await execa(
      "npm",
      [
        "install",
        "-D",
        ...["oxlint@~1.73.0"],
      ],
      {cwd: currentPath},
    );
  }

  if (dependencias.length) {
    spin.message("Installing dependencies...");
  }
  try {
    //Instala as outras dependências se tiver alguma selecionada
    if (dependencias.length) {
      await execa("npm", ["install", ...dependencias], {
        cwd: currentPath,
        stdio: "inherit",
      });
    }
    await execa("npm", ["install"], { cwd: currentPath });
    /* if (!Inicialize_repository) {
    } else {
    } */
  } catch {
    console.log("Error during application creation or configuration!");
  }
}