import { execa } from "execa";
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

  //Separação das features pra saber se vão ser adicionadas na criação ou vão ter que ser configuradas
  const features = config.features;
  const createVueArgs: string[] = [];
  const dependencias: string[][] = [];

  //Grande for of
  for (let feature of features) {
    if (feature.startsWith("install")) {
      dependencias.push(feature.split(" "));
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
  //Configurar o caminho que a pasta vai ser criada
  const currentPath = path.resolve(projectName);

  //Verifica se o eslint foi instalado, caso seja, ele instala o oxlint@~1.73.0 pra não dar erro, por que dá erro? eu não sei. Pergunta pro Peraza, mas tem algo a ver com o create-vue que baixa pacote com erro de compatibilidade.
  if (createVueArgs.includes("--eslint")) {await execa("npm", ["install", "-D", "oxlint@~1.73.0"], {cwd: currentPath});}

//Instala as dependências necessárias para o TypeScript
  if (use_typeScript) {await execa("npm",["install","-D", "@vue/tsconfig"]), {cwd: currentPath}}

//Roda aquele npm install gostoso e necessário de toda aplicação
  await execa("npm", ["install"], { cwd: currentPath, stdin: "inherit" });

  //Instala as outras dependências
  for (let dependencia of dependencias) {
    console.log(`Vai tentar instalar a dependencia: ${dependencia}`);
    try {
      await execa("npm", dependencia, {
        cwd: currentPath,
        stdio: "inherit",
      });
      console.log(`Instalou a dependência: ${dependencia}`);
    } catch {
      console.log(`Erro na dependencia: ${dependencia}`);
    }
  }
console.log("Aplicação criada e configurada com sucesso!")
await execa("npm", ["run", "dev"], {cwd: currentPath, stdio: "inherit"})
}