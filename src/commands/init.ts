//Importa os prompts
import { 
  initPrompt,
  ConfigPrompt,
  copyPrompt, 
} from "../prompts/index.js";

//Importa os executores de ações
import { 
  projectExecutorII,
  copyExecutor
} from "../executors/index.js";

//Importa as funções do @clack/prompts para tornar o terminal mais bonito
import { 
  intro, 
  log 
} from "@clack/prompts";

//Importa o gradiente do gradient-string para tornar o terminal mais bonito
import gradient from "gradient-string";

//Exporta a função init para usar no arquivo inicial da CLI
export async function init() {
  intro(
    gradient([
      "#42D392",
      "#47C7A2",
      "#52ACC4",
      "#55A2D0",
      "#5A96E0",
      "#5C8DE8",
      "#3F3BCF",
      "#8F3DB3",
      "#C353C3",
    ])("Welcome to Modul CLI!"),
  );
  log.message(
    "A modular CLI for building modern, scalable web applications with a structured development workflow.",
  );
  
  //Pergunta inicial, qual tipo de projeto o usuário deseja
  const projectStructure = await initPrompt();

  //Decidir qual estrutura usar
  if (projectStructure.projectType == "project") {

    //Se o usuário quiser um projeto completo
    await projectExecutorII(await ConfigPrompt());
  } else if (projectStructure.projectType == "copy") {

    //Se o usuário quiser um projeto com template copiado
    copyExecutor((await copyPrompt()).repository)
  } else {
    //Se o usuário quiser somente os comandos de auxílio
  }
}
