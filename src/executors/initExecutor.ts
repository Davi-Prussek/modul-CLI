import { execa } from "execa";
import type { ConfigType } from "../types/ConfigType.js";
import { cwd } from "node:process";

export async function initExecutor(config: ConfigType) {
  //Só pra ficar mais limpo
  const projectName = config.ProjectName;

  //Tô com preguiça de fazer
  const css_framework = config.css_framework;

  //Decidir se tem typescript ou não
  const use_typeScript = config.use_typeScript;
  const commandTS = use_typeScript
  ? ["--typescript"]
  : [];

  //Separação das features pra saber se vão ser adicionadas na criação ou vão ter que ser configuradas
  const features = config.features;
  const createVueArgs: string[] = [];
  const dependencias: string[] = [];

  //Grande for of
  for (let feature of features) {
    if (feature.startsWith("install ")) {
      dependencias.push(feature);
    } else {
      createVueArgs.push("--" + feature);
    }
  }

  //Decidir se deve iniciar um repositório git
  const Inicialize_repository = config.Inicialize_repository;

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
      ...createVueArgs,
    ],
    { stdio: "inherit" },
  );

  //Instala as outras dependências
for (const dependencia of dependencias) {
  try {
    await execa(
      "npm",
      dependencia.split(" "),
      {
        cwd: projectName,
        stdio: "inherit",
      }
    );
  } catch (error) {
    console.error(`Erro de instalação no pacote: ${dependencia}`);
  }
}
}
