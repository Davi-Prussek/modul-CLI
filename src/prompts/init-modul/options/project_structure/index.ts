import type { ConfigType } from "../../../../types/ConfigType.js";
import { projectName } from "../project_structure/questions/projectName.js"
import { useTypeScript } from "../project_structure/questions/use_typeScript.js"
import { recursos } from "../project_structure/questions/features.js"
import { cssFramework } from "../project_structure/questions/css_framework.js"
import { InicializeRepository } from "../project_structure/questions/Inicialize_repository.js"
import { gitConfigPrompt } from "../project_structure/questions/gitConfigPrompt.js"
import { vuetifyPrompt } from "../project_structure/questions/vuetifyPrompt.js"


export {
      type ConfigType,
      projectName,
      useTypeScript,
      recursos,
      cssFramework,
      InicializeRepository,
      gitConfigPrompt,
      vuetifyPrompt,
}